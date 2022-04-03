import React from 'react'

interface navIconProps {
  SelectedIcon: React.ElementType
  selected?: boolean
}

const IconSelector: React.FC<navIconProps> = ({ SelectedIcon, selected }) => {
  return (
    <SelectedIcon
      fontSize="large"
      sx={{ color: selected ? 'grey.900' : 'grey.800' }}
    />
  )
}

export default IconSelector
