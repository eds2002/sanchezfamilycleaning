/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon: () => '🖼️' as any,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      description: 'Give it some context. (For SEO)',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
  },
})
