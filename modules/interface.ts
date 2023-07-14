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
