import { Box } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { GALLERY_COMPONENT_STYLES } from '../../lib/componentStyles'

export default defineType({
  name: 'galleryComponent',
  title: 'Gallery Component',
  type: 'object',
  icon: Box,
  preview: {
    select: {
      componentStyle: 'componentStyle',
    },
    prepare({ componentStyle }) {
      return {
        title: 'Gallery',
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
        list: GALLERY_COMPONENT_STYLES.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
      initialValue: GALLERY_COMPONENT_STYLES[0].value,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      description: 'Content on the stats component',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'gallery' }] }],
    }),
  ],
})
