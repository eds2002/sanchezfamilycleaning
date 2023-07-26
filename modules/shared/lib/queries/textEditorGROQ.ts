import { groq } from 'next-sanity'

export default groq`
_type == 'textEditor'=>{
  "textEditor":{
    _key,
    ...,
  }
}
`
