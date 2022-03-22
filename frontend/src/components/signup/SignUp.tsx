import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import PopUpContainer from '../common/PopUpContainer'
import { LoadingButton, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import styles from '../styles/LoginUserNamePopUp.styled'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Input from '../common/Input'
import { registerThunk } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

const SignUp: React.FC = () => {
  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false)
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false)
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)
  const [date, setDate] = React.useState<Date | null>(null)
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.user.isLoading)

  const handleClickShowPassword = () => {
    setIsPasswordShown((prevState) => !prevState)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const handleRegister = () => {
    dispatch(registerThunk({ username: userName, password, email }))
  }

  return (
    <PopUpContainer onCloseURL="/">
      <Typography variant="h4" fontWeight={'500'}>
        Create your account
      </Typography>
      <Input
        value={userName}
        setValue={setUserName}
        isValid={isUsernameValid}
        setIsValid={setIsUsernameValid}
        inputType="username"
        warningText="Must be longer than 2 characters"
        inputProps={{ maxLength: 50 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{`${userName.length}/50`}</InputAdornment>
          ),
        }}
      />
      <Input
        value={email}
        setValue={setEmail}
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
        inputType="email"
        warningText="Must be valid e-mail adress"
      />
      <Input
        value={password}
        setValue={setPassword}
        isValid={isPasswordValid}
        setIsValid={setIsPasswordValid}
        inputType="password"
        type={!isPasswordShown ? 'password' : 'text'}
        warningText="Must be longer than 6 characters"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {isPasswordShown ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Typography variant="body1" my={2} fontWeight={500}>
        Date of birth
      </Typography>
      <Typography variant="body2" mb={2}>
        This will not be shown publicly. Confirm your own age, even if this
        account is for a business, a pet, or something else.
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date of birth"
          value={date}
          maxDate={new Date()}
          onChange={(newDate: Date | null) => {
            setDate(newDate)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LoadingButton
        loading={isLoading}
        onClick={handleRegister}
        disabled={!(isUsernameValid && isPasswordValid && isEmailValid)}
        variant="contained"
        sx={styles.nextButton}
      >
        Next
      </LoadingButton>
    </PopUpContainer>
  )
}

export default SignUp
