/* eslint-disable import/prefer-default-export */
import ConfirmationEmail from '@/react-email-starter/emails/confirmation'
import OwnerNotify from '@/react-email-starter/emails/ownerNotify'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const req = await request.json()
    const { firstName, email, message } = req
    await resend.emails.send({
      from: 'Sanchez Family Cleaning <hello@sanchezfamilycleaning.com>',
      to: [email],
      subject: `Thanks for Reaching Out, ${firstName}!`,
      react: ConfirmationEmail({ firstName }),
    })

    await resend.emails.send({
      from: 'Sanchez Family Cleaning <hello@sanchezfamilycleaning.com>',
      to: ['es23jr@gmail.com'],
      subject: `A user has messaged you!`,
      react: OwnerNotify({ firstName, email, message }),
    })

    return new Response(JSON.stringify({ message: 'Email sent succesfully', code: 200 }))
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Could not send email', code: 400 }))
  }
}
