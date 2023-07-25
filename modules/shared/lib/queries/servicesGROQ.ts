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
      "primaryButton": select(primaryButton.text != null && primaryButton.link != null => {
        ...primaryButton,
        "link": select(
          primaryButton.link->_type == 'page' => primaryButton.link->slug.current,
          primaryButton.link->_type == 'service' => "/service/" + primaryButton.link->slug.current
        )
      }),
      "secondaryButton": select(secondaryButton.text != null && secondaryButton.link != null => {
        ...secondaryButton,
        "link": select(
          secondaryButton.link->_type == 'page' => secondaryButton.link->slug.current,
          secondaryButton.link->_type == 'service' => "/service/" + secondaryButton.link->slug.current
        )
      }),
      "elements": elements[]{
        _type == 'blockRef'=>{
          icon,
          ...element->{
            ...select(
              _type == 'value' => {
                _type,
                _id,
                value,
                valueDesc
              },
              _type == 'service' => {
                _type,
                _id,
                title,
                "image":image->{
                  _id,
                  caption,
                  "image": image.asset->url
                },
                shortDesc,
                longDesc,
                isPopular,
                "link": "/service/" + slug.current,
                ...features,
                "imageUrl": serviceImages[0]->image.asset->url,
                testimonial->{
                  _id,
                  name,
                  testimonial,
                  county,
                  "image": image.asset->url,
                }
              }
            )
          },
        },
        _type == 'customBlock'=>{
          _type,
          _id,
          "value": value,
          "description": description,
          "link": "/service/" + link->slug.current,
        }
      }
    }
  }
`
