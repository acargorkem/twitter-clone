import { styled } from '@mui/system'
import Card from '@mui/material/Box'
import { IconButton, Button } from '@mui/material'

export const StyledCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  width: '100%',
}))

export const StyledMobileAvatarButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
  display: 'block',
}))

export const StyledLogoutButton = styled(Button)(({ theme }) => ({
  width: '100%',
  textTransform: 'none',
  textAlign: 'left',
  justifyContent: 'flex-start',
  color: theme.palette.grey[900],
  fontWeight: 400,
  padding: theme.spacing(2),
}))
