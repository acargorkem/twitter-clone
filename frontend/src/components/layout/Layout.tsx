import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomTabs from '../BottomTabs/BottomTabs'
import MobileHeader from '../mobileHeader/MobileHeader'
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
        <MobileHeader />
      </StyledHeader>
      <StyledMain>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </StyledMain>
      <BottomTabs />
    </LayoutContainer>
  )
}

export default Layout
