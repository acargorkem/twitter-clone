import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import {
  StyledHeader,
  StyledMain,
  LayoutContainer,
  MainContainer,
} from './Layout.styled'

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <StyledHeader>
        <Sidebar />
      </StyledHeader>
      <StyledMain>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </StyledMain>
    </LayoutContainer>
  )
}

export default Layout
