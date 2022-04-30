import { styled } from '@mui/system'
import { Box, Button, Typography } from '@mui/material'

export const Container = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 800,
  overflowY: 'auto',
  backgroundColor: 'white',
  border: '1px solid #000',
  borderRadius: 5,
  padding: 9,
}))

export const UpperSection = styled(Box)(() => ({
  height: 60,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 10,
}))

export const BackButton = styled(Button)(() => ({}))

export const SaveButton = styled(Button)(() => ({
  marginLeft: 'auto',
}))

export const Title = styled(Typography)(() => ({
  marginLeft: 10,
}))

export const InputSection = styled(Box)(() => ({
  height: 60,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
}))

export const Input = styled('input')({
  display: 'none',
})
