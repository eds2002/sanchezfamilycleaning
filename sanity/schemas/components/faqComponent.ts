/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { FAQ_COMPONENT_STYLES } from '../../lib/componentStyles'

export default defineType({
  name: 'faqComponent',
  title: 'FAQ Component',
  type: 'object',
  icon: Box,
  preview: {
    select: {
      componentStyle: 'componentStyle',
    },
    prepare({ componentStyle }) {
      return {
        title: 'Frequently Asked Questions',
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
      name: 'supportEmail',
      title: 'Support Email',
      type: 'reference',
      description: 'The email used where users can send questions to.',
      to: [{ type: 'company' }],
    }),
    defineField({
      name: 'faq',
      title: "FAQ's",
      type: 'array',
      of: [
        {
          type: 'object',
          icon: () => '🙋‍♂️' as any,
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
