import * as Icons from 'react-icons/fa'

// Sanity data mock
// const data = {
//   _type: 'iconPicker',
//   name: 'FaBeer',
//   provider: 'fa',
//   _updatedAt: '2021-07-25T02:30:43.141Z',
// }

const DynamicFontAwesomeIcon = ({ name }: { name: string }) => Icons[name ?? 'FaBeer']

export default DynamicFontAwesomeIcon
