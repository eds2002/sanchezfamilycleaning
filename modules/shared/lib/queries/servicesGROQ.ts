import { groq } from 'next-sanity'

export default groq`
  _type == 'services'=>{
    "services":{
      _key,
      componentStyle,
      content,
      "annoucement": select(annoucement.text != null && annoucement.link != null => {
        ...annoucement,
        "link": select(
          annoucement.link->_type == 'page' => annoucement.link->slug.current,
          annoucement.link->_type == 'service' => "/service/" + annoucement.link->slug.current
        )
      }),
      "testimonial":testimonial->{
        _id,
        name,
        testimonial,
        county,
        "image": image.asset->url,
      },
      "elements":elements[]{
        _type == 'reference' => @->{
          ...select(
            _type == 'value' => {
              _type,
              _id,
              value,
              valueDesc
            },
            _type == 'service' => {
              _type,
              title,
              "image": image.asset->url,
              shortDesc,
              longDesc,
              isPopular,
              link,
              _id,
            }
          )
        },
        _type == 'customBlock'=>{
          _type,
          _id,
          "value": value,
          "description": description,
        }
      },
    }
  }
`
