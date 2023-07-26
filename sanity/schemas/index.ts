/* eslint-disable import/prefer-default-export */
import company from './objects/company'
import page from './components/pageType'
import contactComponent from './components/contactComponent'
import ctaComponent from './components/ctaComponent'
import heroType from './components/heroType'
import servicesComponent from './components/servicesComponent'
import aboutComponent from './components/aboutComponent'
import testimonialsComponent from './components/testimonialsComponent'
import faqComponent from './components/faqComponent'
import service from './objects/service'
import stats from './objects/stats'
import testimonials from './objects/testimonials'
import values from './objects/values'
import gallery from './objects/gallery'
import navigation from './documents/navigation'
import link from './objects/link'
import navItem from './objects/navItem'
import galleryComponent from './components/galleryComponent'
import textEditorComponent from './components/textEditorComponent'

export const schemaTypes = [
  service,
  stats,
  company,
  testimonials,
  values,
  gallery,

  // components
  navigation,
  link,
  navItem,
  page,
  heroType,
  ctaComponent,
  aboutComponent,
  testimonialsComponent,
  servicesComponent,
  contactComponent,
  faqComponent,
  galleryComponent,
  textEditorComponent,
]
