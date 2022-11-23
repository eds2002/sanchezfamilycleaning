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
  const html = `
  <html>
  <head>
    <title></title>
    <style>
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        max-width:700px;
        margin-left:auto;
        margin-right:auto;
      }
      .logo{
        font-size:2rem;
        font-weight:700;
        text-align:center;
        padding:0.5rem;
      }
      
      .confirmation{
          padding:0.5rem;
          text-align:left;
          flex:1 1 0%;;
      }
      
      .confirmation__heading{
          font-size:2rem;
          font-weight:600;
          text-align:center;
      }
      
      .confirmation__paragraph{
          font-weight:400;
          font-size:0.9rem;
          text-align:center;
          max-width:70vw;
          margin-left:auto;
          margin-right:auto;
      }
      
      .image{
          margin-left:auto;
          margin-right:auto;
          display:flex;
          flex:1 1 0%;;
          position:relative;
          height:100%;
          width:100%;
      }
      
      svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      
      .container{
          display:flex;
          flex-direction:row-reverse;
          padding:0px 1rem;
          position:rela
      }
      
      .confirmation__actions{
          margin-top:3rem;
          display:flex;
          align-content:center;
          justify-content:center;
      }
      
      .confirmation__actions a{
          border-radius:500px;
          padding:0.5rem 1rem;
          border:none;
          background-color:rgba(34, 211, 238,100%);
          font-size:1rem;
          width:100%;
      }
      .button:hover{
          background-color:rgba(6, 182, 212,60%);
      }
      
      a{
          text-decoration:none;
          color:black;
          text-align:center;
      }
      
      @media (prefers-color-scheme: dark) {
          
      }
      
      @media (prefers-color-scheme: light) {
      }
      
      @media (min-width: 768px) {
          .logo{
              font-size:4rem;
          }
          .confirmation__heading{
              font-size:2.5rem;
              text-align:left;
              
          }
          .confirmation__paragraph{
              font-size:1rem;
              text-align:left;
              color:rgba(0,0,0,70%);
              max-width:40rem;
              margin-left:0;
              margin-right:0;
          }
          
          .confirmation__actions{
              margin-top:1.5rem;
              display:flex;
              align-content:center;
              justify-content:start;
          }
          
          .confirmation__actions a{
              border-radius:500px;
              padding:0.5rem 1rem;
              border:none;
              background-color:rgba(6, 182, 212,100%);
              font-size:1rem;
              width:auto;
          }
          
          .image{
              height:50vh;
          }
      }
      
    </style>
  </head>
  <body>
    <header>
      <h1 class = "logo">S.F.C</h1>
    </header>
    <section class = "container">
        <div class = "image">
        <div class = "confirmation">
          <h3 class = "confirmation__heading">To new beginnings!</h3>
          <p class = "confirmation__paragraph">
              ${firstName}, we&apos;ve received your information and are sending it to our team to review. <br/>We hope to be working with you soon, now you can sit back and relax.
          </p>
          <div class = "confirmation__actions">
              <a href = "https://www.sanchezfamilycleaning.com">Visit website</a>
          </div>
        </div>
    </section>
  </body>
  </html>
  `

  const confirmationMsg = {
    to: workEmail, // Change to your recipient
    from: {
      email:'support@sanchezfamilycleaning.com',
      name:'Sanchez Family Cleaning'
    }, // Change to your verified sender
    subject: `To new beginnings, ${firstName}`,
    html: html,
  }

  await sgMail
    .send(confirmationMsg)
    .then(()=>{return res.status(200).json({code:200,message:'SUCCESS'})})
    .catch((error)=>{return res.status(200).json({code:200,message:error})})
}


