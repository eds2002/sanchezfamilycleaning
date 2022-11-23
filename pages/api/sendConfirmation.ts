// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!)

type Data = {
  code:number;
  message:string;
}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  const {firstName, lastName, workEmail, companySize,userSelectedPackage} = req.body

  const confirmationMsg = {
    to: workEmail, // Change to your recipient
    from: {
      email:'support@sanchezfamilycleaning.com',
      name:'Sanchez Family Cleaning'
    }, // Change to your verified sender
    subject: `To new beginnings, ${firstName}`,
    html: `Last step for you is to sit back, relax and wait for our message. Thank you.`,
  }


  await sgMail
    .send(confirmationMsg)
    .then(()=>{return res.status(200).json({code:200,message:'SUCCESS'})})
    .catch((error)=>{return res.status(200).json({code:200,message:error})})
}
