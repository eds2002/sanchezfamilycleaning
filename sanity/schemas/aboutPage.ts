import { Rule, SchemaTypeDefinition } from 'sanity'

const hero: SchemaTypeDefinition = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'gridImages',
      title: 'Grid Images',
      type: 'array',
      validation: (rule: Rule) => rule.min(5).required(),
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
}

const aboutUs: SchemaTypeDefinition = {
  name: 'aboutUs',
  title: 'About Us',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description2',
      title: 'Description 2',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      validation: (rule: Rule) => rule.max(3).min(3).required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'statTitle',
              title: 'Title',
              type: 'string',
              description: 'The title of the stat',
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'stat',
              title: 'Stat',
              type: 'string',
              description: 'Stat number',
              validation: (Rule) =>
                Rule.custom((field: string, context) => {
                  if (field === undefined) return 'Required'

                  const split = field.split('').map((char: string) => Number(char))
                  const doesNotIncludeNum = split.every((char: (typeof split)[number]) => isNaN(char))
                  if (doesNotIncludeNum) {
                    return 'Must include a number'
                  }
                  return true
                }),
            },
          ],
        },
      ],
    },
  ],
}

const bannerImage: SchemaTypeDefinition = {
  name: 'bannerImage',
  title: 'Banner Image',
  type: 'image',
  validation: (rule: Rule) => rule.required(),
}

const values: SchemaTypeDefinition = {
  name: 'values',
  title: 'Values',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'values',
      title: 'Values',
      type: 'array',
      validation: (rule: Rule) => rule.max(6).min(6).required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'valueTitle',
              title: 'Value Title',
              type: 'string',
              description: 'The title of the value',
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'valueDesc',
              title: 'Value Description',
              type: 'text',
              validation: (rule: Rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
}

const about = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [hero, aboutUs, bannerImage, values],
}
export default about
