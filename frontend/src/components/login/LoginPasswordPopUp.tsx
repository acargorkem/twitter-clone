import React, { useState, useEffect } from 'react'
import {
  Box,
  FormControl,
  TextField,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Link, useNavigate } from 'react-router-dom'
import { loginThunk } from '../../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import Loading from '../common/Loading'

const LoginPasswordPopUp: React.FC<{ username: string }> = ({ username }) => {
  const [password, setPassword] = useState<string>('')
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)
  const dispatch = useDispatch()
  const initialCount = useSelector((state: RootState) => state.user.isLoading)
  const isUserAuth = useSelector((state: RootState) => state.user.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (isUserAuth) {
      navigate('/home')
    }
  }, [isUserAuth, navigate])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleClickShowPassword = () => {
    setIsPasswordShown((prevState) => !prevState)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const handleSubmit = async () => {
    dispatch(loginThunk({ username, password }))
  }

  return (
    <>
      {initialCount && <Loading />}
      <Box
        sx={{
          width: '100%',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" mt={'1rem'} fontWeight={500}>
          Enter your password
        </Typography>
        <TextField
          disabled
          id="filled-disabled"
          label="Username"
          defaultValue={username}
          variant="filled"
          fullWidth
          margin="normal"
        />
        <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={isPasswordShown ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
            endAdornment={
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
            }
            label="Password"
          />
        </FormControl>
        <Button
          onClick={handleSubmit}
          disabled={password === ''}
          variant="contained"
          fullWidth
          sx={{ mt: 'auto', borderRadius: '30px' }}
        >
          Log in
        </Button>
        <Typography variant="body2" my={'2rem'}>
          Dont have an account?
          <Link to="/"> Sign up</Link>
        </Typography>
      </Box>
    </>
  )
}

export default LoginPasswordPopUp
