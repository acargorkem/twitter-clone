import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  position: 'fixed',
  height: 53,
  width: '100vw',
  bottom: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 1rem',
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.secondary.main,
}))
