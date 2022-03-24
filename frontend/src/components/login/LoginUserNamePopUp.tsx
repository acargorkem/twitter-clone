import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import SignUpWith from '../common/SignUpWith'
import styles from '../styles/LoginUserNamePopUp.styled'
import { Link } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'

const LoginUserNamePopUp: React.FC<{
  onNextButtonClick: (text: string) => void
  isLoading: boolean
}> = ({ onNextButtonClick, isLoading }) => {
  const [userInput, setUserInput] = useState<string>('')

  const enterOnClickHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onNextButtonClick(userInput)
    }
  }

  return (
    <Box sx={styles.lower}>
      <Typography variant="h5" fontWeight={900} mt={'2rem'}>
        Sign in to Twitter
      </Typography>
      <SignUpWith />
      <TextField
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={enterOnClickHandler}
        id="outlined-basic"
        label="Phone, email, or username"
        variant="outlined"
        fullWidth
      />
      <LoadingButton
        variant="contained"
        sx={styles.nextButton}
        onClick={() => {
          onNextButtonClick(userInput)
        }}
        loading={isLoading}
      >
        Next
      </LoadingButton>
      <Typography variant="body2" mt={'2rem'}>
        Dont have an account?
        <Link to="/signup"> Sign up</Link>
      </Typography>
    </Box>
  )
}

export default LoginUserNamePopUp
