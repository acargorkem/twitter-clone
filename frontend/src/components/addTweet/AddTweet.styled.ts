import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import { Avatar, Button } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 10,
  width: '100%',
  padding: theme.spacing(1),
  minHeight: 100,
}))

export const StyledAvatar = styled(Avatar)(() => ({
  height: 50,
  width: 50,
}))

export const CardHeader = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

export const StyledBox = styled(Box)(() => ({
  flexGrow: 1,
}))

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 5,
  padding: `${theme.spacing(1)} 0`,
}))

export const StyledTweetButton = styled(Button)(({ theme }) => ({
  marginLeft: 'auto',
  borderRadius: 20,

  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.5,
    color: theme.palette.secondary.main,
  },
}))
