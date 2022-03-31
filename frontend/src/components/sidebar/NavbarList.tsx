import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { List, ListItemIcon } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import TagIcon from '@mui/icons-material/Tag'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import IconSelector from './IconSelector'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import { StyledTypography, StyledListItemButton } from './NavbarList.styled'

const navItems = [
  {
    name: 'home',
    icon: HomeIcon,
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
  {
    name: 'profile',
    icon: PermIdentityOutlinedIcon,
  },
]

const NavbarList: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <List>
      {navItems.map(({ name, icon }) => (
        <StyledListItemButton
          component={RouterLink}
          to={`/${name}`}
          key={name}
          selected={`/${name}` === pathname}
          disableTouchRipple
        >
          <ListItemIcon>
            <IconSelector SelectedIcon={icon} />
          </ListItemIcon>
          <StyledTypography>{name}</StyledTypography>
        </StyledListItemButton>
      ))}
    </List>
  )
}

export default NavbarList
