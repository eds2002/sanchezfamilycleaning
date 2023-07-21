export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  icon: () => '👥',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the reviewer',
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string',
      description: 'The testimonial',
    },
    {
      name: 'county',
      title: 'County',
      type: 'string',
      description: 'The county of the reviewer',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The image of the reviewer',
    },
  ],
}
