export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Internal Links',
      name: 'internalLinks',
      description: 'Select pages for navigation',
      type: 'array',
      of: [
        {
          title: 'Navigation',
          name: 'nav',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'iconPicker',
              options: {
                providers: ['fa'],
                outputFormat: 'react',
              },
            },
            {
              name: 'reference',
              title: 'Reference',
              type: 'reference',
              to: [{ type: 'page' }, { type: 'service' }],
            },
            {
              name: 'linkDescription',
              title: 'Link Description',
              type: 'text',
              description: 'This will be used for the navigation menu',
            },
          ],
        },
      ],
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
    },
  ],
}
