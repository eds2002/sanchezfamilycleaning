// eslint-disable-next-line @typescript-eslint/no-var-requires
const slug = require('slugify')

export default function slugify(input: string) {
  return slug(input, { lower: true })
}
