import { Rule, SchemaTypeDefinition } from 'sanity'

const whyUs: SchemaTypeDefinition = {
  name: 'whyUs',
  title: 'Why Us',
  type: 'object',
  description: 'The reasons why you should choose us',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'reasons',
      title: 'Reasons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'reasonTitle',
              title: 'Reason Title',
              type: 'string',
              description: 'The reason.',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'A short description of the reason',
            },
          ],
        },
      ],
    },
    {
      name: 'gridImages',
      title: 'Grid Images',
      type: 'array',
      description: 'Images for section grid',
      validation: (rule: Rule) => rule.required().min(5),
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
}

const contactUs: SchemaTypeDefinition = {
  name: 'contactUs',
  title: 'Contact Us',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      preview: {
        select: {
          title: 'title',
        },
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
  ],
}

const services: SchemaTypeDefinition = {
  name: 'servicesComponent',
  title: 'Services Component',
  type: 'object',
  description: 'The services that the company provides',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'A heading of the section',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subheadingOne',
      title: 'Sub Heading One',
      type: 'string',
      description: 'A paragraph of the section',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subheadingTwo',
      title: 'Sub Heading Two',
      type: 'string',
      description: 'A second paragraph of the section',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      validation: (rule: Rule) => rule.max(3).required().min(3),
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    },
    {
      name: 'floatingTestimonial',
      title: 'Floating Testimonial',
      type: 'reference',
      to: [{ type: 'testimonials' }],
    },
  ],
}

const hero: SchemaTypeDefinition = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subHeader',
      title: 'Sub Header',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
}

const stats: SchemaTypeDefinition = {
  name: 'companyStats',
  title: 'Company Stats',
  description: 'The stats that appear on the home page',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [{ type: 'stat' }],
    },
  ],
}

const testimonial: SchemaTypeDefinition = {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The heading of the testimonials section',
      validation: (rule) => rule.required(),
    },
    {
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
      description: 'The sub heading of the testimonials section',
      validation: (rule) => rule.required(),
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      validation: (rule: Rule) => rule.required().min(5),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Reviewer Name',
            },
            {
              name: 'testimonial',
              title: 'Testimonial',
              type: 'string',
              description: 'The testimonial',
            },
            {
              name: 'county',
              title: 'County',
              type: 'string',
              description: 'The county of the reviewer',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'The image of the reviewer',
            },
          ],
        },
      ],
    },
  ],
}

const home = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [hero, stats, services, testimonial, whyUs, contactUs],
}
export default home
