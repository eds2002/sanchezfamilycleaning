// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!)

type Data = {
  code:number;
  message:string;
}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  const {email,message} = req.body

  const msgToOwnerData = {
    to: 'support@sanchezfamilycleaning.com', // Change to your recipient
    from: {
      name:'A user has asked a question',
      email:'support@sanchezfamilycleaning.com'
    }, // Change to your verified sender
    subject: 'A question has been asked.',
    html: `
    <h1>From: ${email}</h1>
    <p>${message}</p>
    `,
  }


  await sgMail
    .send(msgToOwnerData)
    .then(()=>{return res.status(200).json({code:200,message:'SUCCESS'})})
    .catch((error)=>{return res.status(200).json({code:200,message:error})})
}
