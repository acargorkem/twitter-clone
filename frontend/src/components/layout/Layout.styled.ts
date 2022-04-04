import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',

  [theme.breakpoints.up('xl')]: {
    justifyContent: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}))

export const StyledHeader = styled('header')(({ theme }) => ({
  flex: '1 3 0%',
  display: 'flex',
  justifyContent: 'flex-end',
  minWidth: 100,
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
  },
}))

export const StyledMain = styled('main')(({ theme }) => ({
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
