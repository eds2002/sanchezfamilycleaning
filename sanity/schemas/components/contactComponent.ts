import { Box } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { CONTACT_COMPONENT_STYLES } from '../../lib/componentStyles'

export default defineType({
  name: 'contactComponent',
  title: 'Contact Component',
  type: 'object',
  icon: Box,
  preview: {
    select: {
      componentStyle: 'componentStyle',
    },
    prepare({ componentStyle }) {
      return {
        title: 'Contact',
        subtitle: componentStyle,
      }
    },
  },
  fields: [
    defineField({
      name: 'componentStyle',
      title: 'Component Style',
      type: 'string',
      options: {
        list: CONTACT_COMPONENT_STYLES.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
      initialValue: CONTACT_COMPONENT_STYLES[0].value,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      description: 'Content on the component',
      fields: [
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
        }),
        defineField({
          name: 'descOne',
          title: 'Description One',
          type: 'text',
        }),
        defineField({
          name: 'descTwo',
          title: 'Description Two',
          type: 'text',
        }),
      ],
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      description: 'Main button on the component',
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: [{ type: 'page' }, { type: 'service' }],
        }),
      ],
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      description: 'Secondary button on the component',
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: [{ type: 'page' }, { type: 'service' }],
        }),
      ],
      options: {
        collapsible: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'reference',
      to: [{ type: 'company' }],
    }),
    defineField({
      name: 'phoneNum',
      title: 'Phone Number',
      type: 'reference',
      to: [{ type: 'company' }],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'company' }],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonials' }],
    }),
  ],
})
