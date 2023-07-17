import type { Image } from 'sanity'

export type HomePageData = {
  _updatedAt: string
  contactUs: {
    phone: string
    description: string
    title: string
    email: string
  }
  _rev: string
  _type: string
  whyUs: {
    heading: string
    text: string
    reasons: {
      reasonTitle: string
      description: string
      _key: string
    }[]
    gridImages: Image[]
  }
  hero: {
    image: {
      _type: string
      asset: {
        _ref: string
        _type: string
      }
    }
    header: string
    subHeader: string
  }
  _id: string
  services: {
    heading: string
    subheadingOne: string
    subheadingTwo: string
    services: {
      _key: string
      service: string
      serviceDesc: string
    }[]
    floatingTestimonial: HomePageData['testimonials']['testimonials'][0]
  }
  companyStats: {
    heading: string
    subheading: string
    stats: {
      _key: string
      stat: string
      statTitle: string
      statDesc: string
    }[]
  }
  testimonials: {
    heading: string
    subheading: string
    testimonials: {
      _key: string
      county: string
      name: string
      testimonial: string
      image: {
        _type: string
        asset: {
          _ref: string
          _type: string
        }
      }
    }[]
  }
  _createdAt: string
}
interface Hero {
  gridImages: Image[]
  heading: string
  subheading: string
}

interface Stat {
  _key: string
  stat: string
  statTitle: string
}

interface AboutUs {
  stats: Stat[]
  description: string
  description2: string
  title: string
}

interface Value {
  valueDesc: string
  _key: string
  valueTitle: string
}

interface Values {
  heading: string
  subHeading: string
  values: Value[]
}

export interface AboutPageData {
  _type: string
  hero: Hero
  _updatedAt: string
  bannerImage: Image
  _createdAt: string
  _rev: string
  _id: string
  aboutUs: AboutUs
  values: Values
}

// Services Interface

interface Slug {
  current: string
  _type: string
}

interface Feature {
  desc: string
  feature: string
  _key: string
}

interface Features {
  subHeader: string
  features: Feature[]
  header: string
}

interface CallToAction {
  header: string
  subHeader: string
}

interface Question {
  answer: string
  question: string
  _key: string
}

interface Questions {
  subHeader: string
  questions: Question[]
  header: string
}

interface Gallery {
  _key: string
  image: Image
  caption: string
}

export interface ServiceInterface {
  isPopular: boolean
  _updatedAt: string
  slug: Slug
  _type: string
  shortDesc: string
  features: Features
  callToAction: CallToAction
  _createdAt: string
  longDesc: string
  questions: Questions
  _rev: string
  title: string
  _id: string
  image: Image
  gallery: Gallery[]
}

export interface ContactInterface {
  _id: string
  phone: string
  location: string
  _type: string
  description: string
  title: string
  _updatedAt: string
  email: string
  _createdAt: string
  _rev: string
}
