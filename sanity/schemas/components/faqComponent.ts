import { Box } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { FAQ_COMPONENT_STYLES } from '../../lib/componentStyles'

export default defineType({
  name: 'faqComponent',
  title: 'FAQ Component',
  type: 'object',
  icon: Box,
  preview: {
    prepare() {
      return {
        title: 'FAQ',
      }
    },
  },
  fields: [
    defineField({
      name: 'componentStyle',
      title: 'Component Style',
      type: 'string',
      options: {
        list: FAQ_COMPONENT_STYLES.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
      initialValue: FAQ_COMPONENT_STYLES[0].value,
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
      name: 'faq',
      title: "FAQ's",
      type: 'array',
      preview: {
        select: {
          title: 'question',
          subtitle: 'answer',
        },
      },
      of: [
        {
          type: 'object',
          icon: () => '🙋‍♂️',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
            },
          ],
        },
      ],
    }),
  ],
})
