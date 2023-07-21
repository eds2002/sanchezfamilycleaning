/* eslint-disable @typescript-eslint/no-explicit-any */
// ./schemas/pageType.ts

import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: () => '📄' as any,
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      hidden: false,
      readOnly: true,
      description: 'This will be the slug of the page. This changes depending on the title / reference.',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) =>
        rule.required().custom((string: string | undefined) => {
          if (!string) return false
          if (string.split(' ').length > 1) {
            return 'Keep the title one word.'
          }
          return true
        }),
    }),
    defineField({
      name: 'reference',
      title: 'Reference',
      description: 'Create a page for a service / etc. (Optional)',
      type: 'reference',
      to: [{ type: 'service' }],
    }),

    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'heroComponent',
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'ctaComponent',
        }),
        defineArrayMember({
          name: 'about',
          type: 'aboutComponent',
        }),
        defineArrayMember({
          name: 'testimonials',
          type: 'testimonialsComponent',
        }),
        defineArrayMember({
          name: 'services',
          type: 'servicesComponent',
        }),
        defineArrayMember({
          name: 'contact',
          type: 'contactComponent',
        }),
        defineArrayMember({
          name: 'faq',
          type: 'faqComponent',
        }),
      ],
    }),
  ],
})
