import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import SignUpWith from '../common/SignUpWith'

const SignInPopUp: React.FC = () => {
  const [userInput, setUserInput] = useState<string>()
  const [isSubmit, setisSubmit] = useState<boolean>(false)
  const [isUserExist, setIsUserExist] = useState<any>(true)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const data = 'username=username1&password=password'
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: data,
    }

    fetch('http://localhost:5000/user/login', requestOptions)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <Box
      height={'100vh'}
      width={'100vw'}
      sx={{ backgroundColor: 'gray', display: 'flex' }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '50vh',
          margin: 'auto',
          backgroundColor: 'white',
          borderRadius: '10px 10px 10px 10px',
        }}
      >
        <Box display={'flex'} alignItems="center" height={'60px'}>
          <IconButton
            aria-label="delete"
            size="small"
            //TODO: this needs to reroute the landpage onClick={}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          <TwitterIcon
            color={'primary'}
            fontSize="large"
            sx={{ flex: '1', margin: 'auto' }}
          />
        </Box>
        <Box flex={'1'} width={'50%'} margin={'auto'}>
          <Typography
            variant="h5"
            component="h5"
            fontWeight={900}
            marginTop={'2rem'}
          >
            Sign in to Twitter
          </Typography>
          <SignUpWith />
          <TextField
            onChange={(e) => setUserInput(e.target.value)}
            id="outlined-basic"
            label="Phone, email, or username"
            variant="outlined"
            fullWidth
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              borderRadius: '30px',
              width: '100%',
              marginTop: '1rem',
              textTransform: 'none',
              backgroundColor: 'black',
            }}
          >
            Next
          </Button>
          <p style={{ marginTop: '4rem', fontWeight: '400' }}>
            Dont have an account?
            <a href="" style={{ color: 'blue' }}>
              Sign up
            </a>
          </p>
        </Box>
      </Container>
      <Alert
        sx={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: isUserExist ? 'none' : 'flex',
        }}
        severity="info"
        variant="filled"
      >
        Sorry, we could not find your account.
      </Alert>
    </Box>
  )
}

export default SignInPopUp
