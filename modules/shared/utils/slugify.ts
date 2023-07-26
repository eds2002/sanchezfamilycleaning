// eslint-disable-next-line @typescript-eslint/no-var-requires
const slug = require('slugify')
// eslint-disable-next-line import/prefer-default-export
export function slugify(input: string) {
  return slug(input, { lower: true })
}
