const slug = require('slugify')
export function slugify(input: string) {
  return slug(input, { lower: true })
}
