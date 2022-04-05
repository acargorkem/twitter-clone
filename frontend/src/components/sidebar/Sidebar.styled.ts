import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'

export const SidebarContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}))

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '0 2rem',
  alignItems: 'flex-start',
  minWidth: 88,
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    padding: '0 1rem',
  },
}))

export const ProfileContainer = styled(Box)({
  marginBottom: '2rem',
  paddingLeft: 8,
  marginTop: 'auto',
})

export const StyledLogoContainer = styled(Box)({
  marginTop: '1rem',
})

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  width: '100%',
  marginTop: 10,
  height: 50,
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginTop: '2rem',
  height: 50,
  width: 50,
  display: 'flex',
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))
