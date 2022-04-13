import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter'
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined'
import {
  SidebarContainer,
  SidebarWrapper,
  ProfileContainer,
  StyledLogoContainer,
  StyledButton,
  StyledIconButton,
} from './Sidebar.styled'
import { IconButton } from '@mui/material'
import NavbarList from './NavbarList'
import SidebarProfile from '../sidebarProfile/SidebarProfile'

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <StyledLogoContainer>
          <IconButton component={RouterLink} to="/home" aria-label="homepage">
            <TwitterIcon color="primary" fontSize="large" />
          </IconButton>
        </StyledLogoContainer>
        <NavbarList />
        <StyledButton variant="contained">Tweet</StyledButton>
        <StyledIconButton color="secondary">
          <AutoFixHighOutlinedIcon />
        </StyledIconButton>
        <ProfileContainer>
          <SidebarProfile />
        </ProfileContainer>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
