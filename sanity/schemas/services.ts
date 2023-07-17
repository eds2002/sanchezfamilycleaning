import type { Rule } from 'sanity'
import { slugify } from '@/modules/shared/utils/slugify'

export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: Rule) => Rule.required(),
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
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'longDesc',
      title: 'Long Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'object',
      fields: [
        {
          name: 'header',
          title: 'Header',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
          description: 'Header for the features section',
        },
        {
          name: 'subHeader',
          title: 'Sub Header',
          type: 'text',
          validation: (Rule: Rule) => Rule.required(),
          description: 'Sub Header for the features section',
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
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
          validation: (Rule: Rule) => Rule.required().min(6),
        },
      ],
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'object',
      fields: [
        {
          name: 'header',
          title: 'Header',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'subHeader',
          title: 'Sub Header',
          type: 'text',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'questions',
          title: 'Questions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'question',

                  title: 'Question',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required(),
                },
                {
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'callToAction',
      title: 'Call To Action',
      type: 'object',
      fields: [
        {
          name: 'header',
          title: 'Header',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'subHeader',
          title: 'Sub Header',
          type: 'text',
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      validation: (Rule: Rule) => Rule.required().min(5),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
