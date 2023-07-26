import { groq } from 'next-sanity'

export default groq`
_type == 'callToAction'=>{
  "cta":{
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
    "values":values[]->{
      _id,
      value,
      valueDesc,
    },
    "gallery":gallery[]->{
      _id,
      "image": image.asset->url,
      caption,
    }
  }
}
`
