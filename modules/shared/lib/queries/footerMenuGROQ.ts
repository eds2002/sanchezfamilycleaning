import { groq } from 'next-sanity'

export default groq`*[_type == "navigation" && title == 'Footer'][0]{
  _id,
  title,
  "items":items[]{
    text,
    "linkData":navigationItemUrl.internalLinks[]{
      icon,
      shortDesc,
      ...reference->{
        ...select(
          _type == "service" => {
            _type,
            "_id": _id,
            title,
            "slug": "service/" + slug.current,
            shortDesc,
            isPopular,
          },
          _type == "page" => {
            _type,
            "_id": _id,
            title,
            "slug": slug.current,
            "shortDesc": metadata.description,
          }
        )
      }
    },
  },
  mission,
}`
