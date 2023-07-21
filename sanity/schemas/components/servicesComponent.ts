/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { SERVICES_COMPONENT_STYLES } from '../../lib/componentStyles'

export default defineType({
  name: 'servicesComponent',
  title: 'Services Component',
  type: 'object',
  icon: Box,
  preview: {
    prepare() {
      return {
        title: 'Services',
      }
    },
  },
  fields: [
    defineField({
      name: 'componentStyle',
      title: 'Component Style',
      type: 'string',
      options: {
        list: SERVICES_COMPONENT_STYLES.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
      initialValue: SERVICES_COMPONENT_STYLES[0].value,
    }),
    defineField({
      name: 'annoucement',
      title: 'Annoucement',
      type: 'object',
      description: 'Annoucement bar on the component',
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
          description: 'What should the annoucement say?',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'reference',
          description: 'Where will it redirect to?',
          to: [{ type: 'page' }, { type: 'service' }],
        }),
      ],
      options: {
        collapsible: true,
      },
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
          type: 'string',
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
      description: 'Main button on the hero component',
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
      description: 'Secondary button on the hero component',
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
      name: 'elements',
      title: 'Elements',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'service' }, { type: 'value' }] },
        {
          name: 'customBlock',
          title: 'Create Element',
          type: 'object',
          icon: () => '✏️' as any,
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonials' }],
    }),
  ],
})
