import slugify from '@/modules/shared/utils/slugify'
import type { Rule } from 'sanity'

export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: () => '🛠',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule: Rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: string) => slugify(input),
      },
    },
    {
      name: 'isPopular',
      title: 'Popular',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'reference',
      to: [{ type: 'gallery' }],
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'longDesc',
      title: 'Long Description',
      type: 'text',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: () => '🛠',
          fields: [
            {
              name: 'feature',
              title: 'Feature',
              type: 'string',
            },
            {
              name: 'desc',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
      validation: (rule: Rule) => rule.required().min(6),
    },
    {
      name: 'serviceImages',
      title: 'Service Images',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'gallery' }],
        },
      ],
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonials' }],
    },
  ],
}
