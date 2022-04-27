import { styled } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  position: 'absolute',
  top: -60,
  outline: `4px solid ${theme.palette.common.white}`,
}))

export const BackButton = styled(IconButton)(() => ({}))
