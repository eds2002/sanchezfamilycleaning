export default {
  name: 'stat',
  title: 'Stat',
  type: 'document',
  icon: () => '📊',
  fields: [
    {
      name: 'stat',
      title: 'Stat Name',
      type: 'string',
    },
    {
      name: 'statDesc',
      title: 'Stat Description',
      type: 'string',
    },
    {
      name: 'statShortDesc',
      title: 'Short Description',
      type: 'string',
    },
  ],
}
