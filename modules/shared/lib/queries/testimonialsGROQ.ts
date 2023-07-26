import { groq } from 'next-sanity'

export default groq`
  _type == 'testimonials'=>{
    "testimonials": {
      _key,
      componentStyle,
      content,
      "testimonials": testimonials[]->{
        _id,
        name,
        testimonial,
        county,
        "image": image.asset->url,
      },
    }
  }
`
