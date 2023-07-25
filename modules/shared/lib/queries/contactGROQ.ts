import { groq } from 'next-sanity'

export default groq`
  _type == 'contact'=>{
    "contact":{
      _key,
      componentStyle,
      content,
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
      "email":email->title,
      "phoneNum": phoneNum->title,
      "location":location->title,
      "testimonial":testimonial->{
        _id,
        name,
        testimonial,
        county,
        "image": image.asset->url,
      },
    }
  }
`
