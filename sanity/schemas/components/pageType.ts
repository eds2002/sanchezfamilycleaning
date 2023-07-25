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
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      description: 'Appears in the head of the page.',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'The title of the page.',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'The description of the page.',
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'The keywords of the page.',
        }),
      ],
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
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
        defineArrayMember({
          name: 'gallery',
          type: 'galleryComponent',
        }),
      ],
    }),
  ],
})
