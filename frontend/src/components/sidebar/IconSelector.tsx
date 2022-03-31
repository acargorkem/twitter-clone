import React from 'react'

interface navIconProps {
  SelectedIcon: React.ElementType
}

const IconSelector: React.FC<navIconProps> = ({ SelectedIcon }) => {
  return <SelectedIcon fontSize="large" sx={{ color: 'grey.800' }} />
}

export default IconSelector
