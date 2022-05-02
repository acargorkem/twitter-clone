import { styled } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  position: 'absolute',
  top: -60,
  outline: `4px solid ${theme.palette.common.white}`,
}))

export const BackButton = styled(IconButton)(() => ({}))

export const BoldText = styled(Typography)(() => ({
  fontWeight: 700,
}))

export const LightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

export const InfoText = styled(LightText)(() => ({
  marginTop: 5,
  textTransform: 'capitalize',
}))

export const StyledSpan = styled('span')(() => ({
  fontWeight: 400,
  marginLeft: 3,
}))

export const StyledButton = styled(Button)(() => ({
  borderRadius: 30,
}))
