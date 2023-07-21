import { groq } from 'next-sanity'

export default groq`
  _type=='hero'=>{
    "hero":{
        _key,
        componentStyle,
        "annoucement": select(annoucement.text != null && annoucement.link != null => {
          ...annoucement,
          "link": select(
            annoucement.link->_type == 'page' => annoucement.link->slug.current,
            annoucement.link->_type == 'service' => "/service/" + annoucement.link->slug.current
          )
        }),
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
        "gallery":gallery[]->{
          _id,
          "image": image.asset->url,
          caption,
        },
        "mainImage": mainImage->{
          _id,
          "image": image.asset->url,
          caption,
        },
      }
    }
`
