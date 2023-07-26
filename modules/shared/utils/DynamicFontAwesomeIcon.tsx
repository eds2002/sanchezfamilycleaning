import * as Icons from 'react-icons/fa'

type IconName = keyof typeof Icons

function DynamicFontAwesomeIcon({ name }: { name: string }) {
  const iconName = name as IconName
  const IconComponent = Icons[iconName]
  if (!IconComponent) {
    const fallBackComponent = Icons.FaQuestion
    return fallBackComponent
  }
  return IconComponent
}

export default DynamicFontAwesomeIcon
