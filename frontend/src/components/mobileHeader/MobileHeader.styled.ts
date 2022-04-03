import { styled } from '@mui/system'
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

export const Container = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(1),
    height: 53.5,
    position: 'fixed',
    top: 0,
    zIndex: 2,
    backgroundColor: theme.palette.secondary.main,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
}))

export const StyledAvatar = styled(Avatar)(() => ({
  height: 28,
  width: 28,
}))

export const StyledTitle = styled(Typography)(() => ({
  textTransform: 'capitalize',
}))

export const StyledIconButton = styled(IconButton)(() => ({
  marginLeft: 'auto',
}))
