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
import Link from '@mui/material/Link'
import axios from '../../api/client'

const SignInPopUp: React.FC = () => {
  const [userInput, setUserInput] = useState<string>()
  const [isSubmit, setisSubmit] = useState<boolean>(false)
  const [showWarning, setShowWarning] = useState<boolean>(false)

  function handleChange(e: any) {
    axios
      .post('/user/check', {
        username: userInput,
      })
      .then((response) => {
        console.log(response)
      })
      .catch(() => {
        setShowWarning(true)
      })
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
          <Typography variant="h5" fontWeight={900} mt={'2rem'}>
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
            variant="contained"
            sx={styles.nextButton}
            onClick={handleChange}
          >
            Next
          </Button>

          <Typography variant="body2" mt={'2rem'}>
            Dont have an account?
            <Link href="#"> Sign up</Link>
          </Typography>
        </Box>
      </Container>
      {showWarning && <Warning />}
    </Box>
  )
}

export default SignInPopUp
