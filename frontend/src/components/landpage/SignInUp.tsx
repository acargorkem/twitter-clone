import React from 'react'
import { Box, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import Button from '@mui/material/Button'
import AppleIcon from '@mui/icons-material/Apple'
import Separator from './Separator'

const SignInUp: React.FC = () => {
  return (
    <Box
      height={1}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      flexDirection={'column'}
      padding="0 2rem"
    >
      <TwitterIcon style={{ fontSize: 50 }} color={'primary'} />
      <Typography
        variant="h2"
        component="h2"
        fontWeight={900}
        marginTop={'2rem'}
      >
        Happening now
      </Typography>
      <Typography
        variant="h4"
        component="h3"
        fontWeight={900}
        marginTop={'2rem'}
      >
        Join Twitter today.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          borderRadius: '30px',
          width: '70%',
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
          width: '70%',
          marginTop: '.6rem',
          color: 'black',
          borderColor: 'black',
        }}
        startIcon={<AppleIcon />}
      >
        Sign up with Apple
      </Button>

      <Separator />
      <Button
        variant="contained"
        sx={{
          borderRadius: '30px',
          width: '70%',
          marginTop: '.6rem',
          textTransform: 'none',
        }}
      >
        Sign up with phone or email
      </Button>
      <p style={{ marginTop: '4rem', fontWeight: '900' }}>
        Already have an account?
      </p>
      <Button
        variant="outlined"
        sx={{ borderRadius: '30px', width: '70%', marginTop: '.6rem' }}
      >
        Sign in
      </Button>
    </Box>
  )
}

export default SignInUp
