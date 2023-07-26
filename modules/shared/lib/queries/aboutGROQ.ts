import { groq } from 'next-sanity'

export default groq`
  _type == 'about'=>{     
    "about":{
      _key,
      componentStyle,
      content,
      stats[]->{
        _id,
        stat,
        statDesc,
        statShortDesc,
      },
      timeline,
    }
  }
`
