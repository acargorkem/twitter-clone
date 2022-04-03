import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

export const SidebarContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}))

export const SidebarWrapper = styled(Box)({
  position: 'fixed',
  top: 0,
  minWidth: '10%',

  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0 1rem',
})

export const ItemsContainer = styled(Box)({})

export const ProfileContainer = styled(Box)({
  marginBottom: '2rem',
  paddingLeft: 8,
})

export const StyledLogoContainer = styled(Box)({
  padding: '16px 0 0 8px ',
})

export const StyledButton = styled(Button)({
  borderRadius: 50,
  width: '100%',
  marginTop: 10,
  height: 50,
})
