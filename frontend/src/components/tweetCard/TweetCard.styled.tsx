import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import { Avatar } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 10,
  width: '100%',
  padding: theme.spacing(1),
  borderColor: theme.palette.grey[200],
  borderStyle: 'solid',
  borderWidth: '1px 0',
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
