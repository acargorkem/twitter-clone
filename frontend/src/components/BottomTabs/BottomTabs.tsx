import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Container } from './BottomTabs.styled'
import TagIcon from '@mui/icons-material/Tag'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { IconButton } from '@mui/material'
import IconSelector from '../sidebar/IconSelector'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

const navItems = [
  {
    name: 'home',
    icon: HomeOutlinedIcon,
  },
  {
    name: 'explore',
    icon: TagIcon,
  },
  {
    name: 'notification',
    icon: NotificationsNoneRoundedIcon,
  },
  {
    name: 'messages',
    icon: EmailOutlinedIcon,
  },
]

const BottomTabs: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      {navItems.map(({ name, icon }) => (
        <IconButton
          component={RouterLink}
          to={`/${name}`}
          key={name}
          sx={{ flex: 1 }}
        >
          <IconSelector
            SelectedIcon={icon}
            selected={`/${name}` === pathname}
          />
        </IconButton>
      ))}
    </Container>
  )
}

export default BottomTabs
