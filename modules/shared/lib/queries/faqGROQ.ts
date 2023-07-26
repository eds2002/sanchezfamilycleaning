import { groq } from 'next-sanity'

export default groq`
_type == 'faq'=>{
  "faq":{
    _key,
    componentStyle,
    content,
    faq,
    "supportEmail":supportEmail->title
  }
}
`
