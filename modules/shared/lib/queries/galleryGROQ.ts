import { groq } from 'next-sanity'

export default groq`
_type == 'gallery'=>{
  "gallery":{
    _key,
    componentStyle,
    content,
    images[]->{
      _id,
      "image":image.asset->url,
      caption
    }
  }
}
`
