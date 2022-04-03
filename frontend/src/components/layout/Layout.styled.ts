import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}))

export const StyledHeader = styled('header')(({ theme }) => ({
  flexBasis: '25%',
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
  },
}))

export const StyledMain = styled('main')(({ theme }) => ({
  flexBasis: '75%',
  flexGrow: 1,
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    top: 53.3,
  },
}))

export const MainContainer = styled(Box)(() => ({}))
