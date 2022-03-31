import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const LayoutContainer = styled(Box)({
  display: 'flex',
})

export const StyledHeader = styled('header')({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
})

export const StyledMain = styled('main')({
  flexGrow: 1,
  minHeight: '100vh',
})

export const MainContainer = styled(Box)({
  width: 990,
})
