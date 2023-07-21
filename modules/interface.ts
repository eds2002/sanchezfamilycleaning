import {
  ABOUT_COMPONENT_STYLES,
  CONTACT_COMPONENT_STYLES,
  CTA_COMPONENT_STYLES,
  FAQ_COMPONENT_STYLES,
  HERO_COMPONENT_STYLES,
  SERVICES_COMPONENT_STYLES,
  TESTIMONIAL_COMPONENT_STYLES,
} from '@/sanity/lib/componentStyles'

type Button = {
  link: string
  text: string
}

type TimelineObj = {
  _id: string
  name: string
  description: string
  date: string
}

export type Value = {
  _type: 'value'
  _id: string
  value: string
  valueDesc: string
}

type ImageCaption = {
  _id: string
  image: string
  caption: string
}

type Testimonial = {
  county: string
  image: string
  _id: string
  name: string
  testimonial: string
}

export type CustomBlock = {
  _type: 'customBlock'
  _id: string
  value: string
  description: string
}

export type Service = {
  _type: 'service'
  title: string
  image: string | null
  shortDesc: string
  longDesc: string
  isPopular: boolean
  link: string
  _id: string
}

type Stat = {
  _id: string
  stat: string
  statDesc: string
  statShortDesc: string
}

type Content = {
  descTwo: string | null
  header: string | null
  descOne: string | null
}

export type HeroType = {
  _key: string
  annoucement: null | Button
  content: Content
  primaryButton: null | Button
  secondaryButton: null | Button
  componentStyle: string
  mainImage: ImageCaption
  gallery: ImageCaption[]
}

export type AboutType = {
  _key: string
  componentStyle: string
  content: Content | null
  stats: Stat[] | null
  timeline: TimelineObj[] | null
}

export type CTAType = {
  _key: string
  primaryButton: null | Button
  secondaryButton: Button | null
  values: Value[]
  gallery: ImageCaption[]
  componentStyle: string
  content: Content
}

export type ContactType = {
  _key: string
  secondaryButton: Button
  email: string
  phoneNum: string
  location: string
  componentStyle: string
  content: Content
  primaryButton: Button
}

export type TestimonialsType = {
  _key: string
  componentStyle: string
  content: Content | null
  testimonials: Testimonial[] | null
}

export type ServicesType = {
  _key: string
  componentStyle: string
  content: Content | null
  annoucement: Button | null
  testimonial: Testimonial | null
  elements: Array<Service | Value | CustomBlock> | null
}

export type PageBuilderItem = {
  hero?: HeroType
  stats?: AboutType
  cta?: CTAType
  contact?: ContactType
  testimonials?: TestimonialsType
  services?: ServicesType
}

export type PageData = {
  slug: string
  pageBuilder: PageBuilderItem[]
}

export type HeroComponentStyle = (typeof HERO_COMPONENT_STYLES)[number]['value']
export type AboutComponentStyles = (typeof ABOUT_COMPONENT_STYLES)[number]['value']
export type ServiceComponentStyles = (typeof SERVICES_COMPONENT_STYLES)[number]['value']
export type TestimonialComponentStyles = (typeof TESTIMONIAL_COMPONENT_STYLES)[number]['value']
export type CTAComponentStyles = (typeof CTA_COMPONENT_STYLES)[number]['value']
export type ContactComponentStyles = (typeof CONTACT_COMPONENT_STYLES)[number]['value']
export type FAQComponentStyles = (typeof FAQ_COMPONENT_STYLES)[number]['value']
