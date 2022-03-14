import React, { useState } from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SignUpWith from '../common/SignUpWith'
import styles from '../styles/SignInPopUp.styled'
import Warning from './Warning'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { clear, keepUser } from '../../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { checkUserExist } from '../../api/lib/user'
import PopUpContainer from '../common/PopUpContainer'

const SignInPopUp: React.FC = (props: any) => {
  const [userInput, setUserInput] = useState<string>('')
  const navigate = useNavigate()

  async function handleChange(e: any) {
    try {
      await checkUserExist(userInput)
      props.keepUser(userInput)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <PopUpContainer closeButton="/">
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
          <Link to="/"> Sign up</Link>
        </Typography>
      </PopUpContainer>
      {props.error && <Warning>Hello</Warning>}
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    error: state.user.showError,
    isExist: state.user.isExist,
    userName: state.user.name,
  }
}
const mapDispatchToProps = { clear, keepUser }

export default connect(mapStateToProps, mapDispatchToProps)(SignInPopUp)
