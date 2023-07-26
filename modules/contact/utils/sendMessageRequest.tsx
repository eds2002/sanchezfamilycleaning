interface SendMessageRequestFn {
  firstName: string
  message: string
  email: string
}

export default async function sendMessageRequest({ firstName, message, email }: SendMessageRequestFn) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
  const apiRoute = '/api/sendMail'
  const url = process.env.NODE_ENV === 'development' ? `http://localhost:3000${apiRoute}` : `${baseURL}${apiRoute}`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      message,
      email,
    }),
  })
  return res.json()
}
