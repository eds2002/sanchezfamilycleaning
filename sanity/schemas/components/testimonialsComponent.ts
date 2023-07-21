import { Box } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { TESTIMONIAL_COMPONENT_STYLES } from '../../lib/componentStyles'

export default defineType({
  name: 'testimonialsComponent',
  title: 'Testimonials Component',
  type: 'object',
  icon: Box,
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
      }
    },
  },
  fields: [
    defineField({
      name: 'componentStyle',
      title: 'Component Style',
      type: 'string',
      options: {
        list: TESTIMONIAL_COMPONENT_STYLES.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
      initialValue: TESTIMONIAL_COMPONENT_STYLES[0].value,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      description: 'Content on the hero component',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonials' }] }],
    }),
  ],
})
