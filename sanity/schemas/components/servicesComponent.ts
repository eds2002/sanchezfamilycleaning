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
    select: {
      componentStyle: 'componentStyle',
    },
    prepare({ componentStyle }) {
      return {
        title: 'Service',
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
      hidden: ({ parent }) => parent.componentStyle === 'withTestimonialAndImage',
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
      hidden: ({ parent }) => parent.componentStyle === 'withTestimonialAndImage',
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
      hidden: ({ parent }) => parent.componentStyle === 'withTestimonialAndImage',
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
      hidden: ({ parent }) => parent.componentStyle === 'withTestimonialAndImage',
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
        defineField({
          type: 'object',
          name: 'blockRef',
          title: 'Block Reference',
          icon: () => '🔗' as any,
          fields: [
            {
              title: 'Icon',
              name: 'icon',
              type: 'iconPicker',
              options: {
                providers: ['fa'],
                outputFormat: 'react',
              },
            },
            {
              name: 'element',
              title: 'Element',
              type: 'reference',
              to: [{ type: 'service' }, { type: 'value' }],
            },
          ],
        }),
        {
          name: 'customBlock',
          title: 'Create Element',
          type: 'object',
          icon: () => '✏️' as any,
          fields: [
            {
              title: 'Icon',
              name: 'icon',
              type: 'iconPicker',
              options: {
                providers: ['fa'],
                outputFormat: 'react',
              },
            },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'link', title: 'Reference To', type: 'reference', to: [{ type: 'page' }, { type: 'service' }] },
          ],
        },
      ],
    }),
    defineField({
      hidden: ({ parent }) => parent.componentStyle === 'withTestimonialAndImage',
      name: 'testimonial',
      title: 'Testimonial',
      type: 'reference',
      to: [{ type: 'testimonials' }],
    }),
  ],
})
