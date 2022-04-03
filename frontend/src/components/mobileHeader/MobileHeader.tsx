import React from 'react'
import { useLocation } from 'react-router-dom'
import Searchbox from '../common/Searchbox'

import {
  Container,
  StyledAvatar,
  StyledTitle,
  StyledIconButton,
} from './MobileHeader.styled'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

const MobileHeader: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      <StyledAvatar alt="deneme" src="" />
      {pathname === '/explore' ? (
        <Searchbox results={[{ title: 'dummy' }]} />
      ) : (
        <StyledTitle fontWeight="fontWeightBold">
          {pathname.slice(1)}
        </StyledTitle>
      )}

      <StyledIconButton color="primary">
        <StarBorderOutlinedIcon />
      </StyledIconButton>
    </Container>
  )
}

export default MobileHeader
