import { Rule } from 'sanity'

export default {
  name: 'allServicesPage',
  title: 'All Services Page',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      valdation: (rule: Rule) => rule.required(),
    },
    {
      name: 'heroDesc',
      title: 'Hero Description',
      type: 'text',
      valdation: (rule: Rule) => rule.required(),
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    },
    {
      name: 'testimonialTitle',
      title: 'Testimonial Title',
      type: 'string',
      valdation: (rule: Rule) => rule.required(),
    },
    {
      name: 'testimonialDesc',
      title: 'Testimonial Description',
      type: 'text',
      valdation: (rule: Rule) => rule.required(),
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
        },
        {
          name: 'testimonial',
          title: 'Testimonial',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
      ],
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      validation: (rule: Rule) => rule.min(4),
      of: [
        {
          type: 'reference',
          to: [{ type: 'stat' }],
        },
      ],
    },
  ],
}
