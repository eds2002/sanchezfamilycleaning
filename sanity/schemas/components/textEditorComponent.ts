import { Box } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'textEditorComponent',
  title: 'Text Editor Component',
  type: 'object',
  icon: Box,
  fields: [
    defineField({
      name: 'textEditor',
      title: 'Text Editor',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
