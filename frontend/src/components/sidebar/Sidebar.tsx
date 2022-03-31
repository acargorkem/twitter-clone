import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
  SidebarContainer,
  SidebarWrapper,
  ItemsContainer,
  ProfileContainer,
  StyledLogoContainer,
  StyledButton,
} from './Sidebar.styled'
import { IconButton } from '@mui/material'
import NavbarList from './NavbarList'

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <ItemsContainer>
          <StyledLogoContainer>
            <IconButton component={RouterLink} to="/home" aria-label="homepage">
              <TwitterIcon color="primary" fontSize="large" />
            </IconButton>
          </StyledLogoContainer>
          <NavbarList />
          <StyledButton variant="contained">Tweet</StyledButton>
        </ItemsContainer>
        <ProfileContainer>Profile</ProfileContainer>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
