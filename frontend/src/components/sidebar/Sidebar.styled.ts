import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

const containerWidth = 275

export const SidebarContainer = styled(Box)({
  width: containerWidth,
})

export const SidebarWrapper = styled(Box)({
  position: 'fixed',
  top: 0,
  width: containerWidth,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const ItemsContainer = styled(Box)({})

export const ProfileContainer = styled(Box)({
  marginBottom: '2rem',
})

export const StyledLogoContainer = styled(Box)({
  padding: '16px 0 0 8px ',
})

export const StyledButton = styled(Button)({
  borderRadius: 50,
  width: '80%',
  marginTop: 10,
  height: 50,
})
