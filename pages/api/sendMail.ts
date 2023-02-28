// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!);

type Data = {
  code: number;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    firstName,
    lastName,
    workEmail,
    companySize,
    userSelectedPackage,
    selectedServices,
  } = req.body;

  const msgToOwnerData = {
    to: "support@sanchezfamilycleaning.com", // Change to your recipient
    from: {
      name: "A new user has requested a quote",
      email: "support@sanchezfamilycleaning.com",
    }, // Change to your verified sender
    subject: "A new user has requested a quote.",
    nickName: "Test",
    html: `
    <p>First name:${firstName}</p>
    <p>Last name: ${lastName}</p>
    <p>Work email: ${workEmail}</p>
    <p>Selected package: ${userSelectedPackage}</p>
    ${selectedServices ? `<p>Selected Services: ${selectedServices}</p>` : ""}
    `,
  };

  await sgMail
    .send(msgToOwnerData)
    .then(() => {
      return res.status(200).json({ code: 200, message: "SUCCESS" });
    })
    .catch((error) => {
      return res.status(200).json({ code: 400, message: error });
    });
}
