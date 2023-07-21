export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: () => '🏢' as any,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Insert any company related value here.',
    },
  ],
}
