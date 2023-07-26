/* eslint-disable import/prefer-default-export */

export async function POST(request: Request) {
  try {
    const req = await request.json()
    const { email, captcha } = req

    if (!email || !captcha)
      return new Response(
        JSON.stringify({ message: 'Unproccesable request, please provide the required fields.', code: 400 }),
      )

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        },
      )
      const captchaValidation = await response.json()
      /**
         * The structure of response from the veirfy API is
         * {
         *  "success": true|false,
         *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
         *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
         *  "error-codes": [...]        // optional
          }
         */
      if (captchaValidation.success) {
        // Return 200 if everything is successful
        return new Response(JSON.stringify({ message: 'Valid user.', code: 200 }))
      }

      return new Response(JSON.stringify({ message: 'Invalid user.', code: 400 }))
    } catch (error) {
      return new Response(JSON.stringify({ message: 'Could not validate captcha.', code: 400 }))
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Could not send email', code: 400 }))
  }
}
