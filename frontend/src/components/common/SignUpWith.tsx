import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/material'
import Separator from './Separator'
import AppleIcon from '@mui/icons-material/Apple'

const SignUpWith: React.FC = () => {
  return (
    <Box>
      <Button
        variant="outlined"
        sx={{
          borderRadius: '30px',
          width: '100%',
          marginTop: '2rem',
          textTransform: 'none',
        }}
      >
        Sign up with Google
      </Button>
      <Button
        variant="outlined"
        sx={{
          borderRadius: '30px',
          width: '100%',
          marginTop: '.6rem',
          color: 'black',
          borderColor: 'black',
        }}
        startIcon={<AppleIcon />}
      >
        Sign up with Apple
      </Button>

      <Separator />
    </Box>
  )
}

export default SignUpWith
