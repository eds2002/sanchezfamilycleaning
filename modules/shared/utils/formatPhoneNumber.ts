export default function formatPhoneNumber(phoneNumber: string) {
  const cleanNum = phoneNumber.toString().replace(/\D/g, '')
  const match = cleanNum.match(/^(\d{3})(\d{0,3})(\d{0,4})$/)
  if (match) {
    return `(${match[1]}) ${match[2] ? `${match[2]}-` : ''}${match[3]}`
  }
  return cleanNum
}
