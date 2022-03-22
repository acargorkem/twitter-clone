import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '../../utils/validations'
import { capitalizeFirstLetter } from '../../utils/helpers'

const validations = {
  email: validateEmail,
  password: validatePassword,
  username: validateUsername,
}

interface inputProps {
  inputType: 'username' | 'password' | 'email'
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  isValid: boolean
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
  warningText: string
}

const Input: React.FC<inputProps & TextFieldProps> = ({
  value,
  setValue,
  isValid,
  setIsValid,
  inputType,
  warningText,
  ...rest
}) => {
  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (!validations[inputType](event.target.value)) {
      return setIsValid(false)
    }
    return setIsValid(true)
  }

  return (
    <TextField
      {...rest}
      onChange={onChangeHandle}
      margin="normal"
      helperText={!isValid && value.length > 0 && warningText}
      error={!isValid && value.length > 0}
      variant="outlined"
      id="outlined-basic"
      label={capitalizeFirstLetter(inputType)}
    />
  )
}

export default Input
