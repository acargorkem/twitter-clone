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
<<<<<<< HEAD
        <MobileHeader />
=======
>>>>>>> bc8e4bf52cd2f43c0ff2b37b4a5bdd20005a46b5
      </StyledHeader>
      <StyledMain>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </StyledMain>
<<<<<<< HEAD
      <BottomTabs />
=======
>>>>>>> bc8e4bf52cd2f43c0ff2b37b4a5bdd20005a46b5
    </LayoutContainer>
  )
}

export default Layout
