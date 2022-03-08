import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SignUpWith from '../common/SignUpWith'
import styles from '../styles/SignInPopUp.styled'
import Warning from './Warning'

const SignInPopUp: React.FC = () => {
  const [userInput, setUserInput] = useState<string>()
  const [isSubmit, setisSubmit] = useState<boolean>(false)
  const [showWarning, setShowWarning] = useState<any>(true)

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
    <Box sx={styles.popUpParent}>
      <Container maxWidth="sm" sx={styles.container}>
        <Box sx={styles.upper}>
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
        <Box sx={styles.lower}>
          <Typography variant="h5" fontWeight={900} marginTop={'2rem'}>
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
            sx={styles.nextButton}
          >
            Next
          </Button>
          <p style={{ marginTop: '4rem', fontWeight: '400' }}>
            Dont have an account?
            <a href="" style={styles.signUp}>
              Sign up
            </a>
          </p>
        </Box>
      </Container>
      <Warning isUserExist={showWarning} />
    </Box>
  )
}

export default SignInPopUp
