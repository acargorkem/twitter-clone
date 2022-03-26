import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Warning from '../login/Warning'
import axiosClient from '../../api/client'
import { logout } from '../../store/userSlice'

const ErrorHandler: React.FC = ({ children }) => {
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    axiosClient.interceptors.request.use(function (request) {
      return request
    })

    axiosClient.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        if (error.response.status === 401) {
          dispatch(logout())
        }
        const errorMessage = error.response
          ? error.response.data.error
          : 'Network Error'
        setHasError(true)
        setErrorMessage(errorMessage)

        return Promise.reject(error)
      },
    )
  }, [dispatch])

  return (
    <>
      {children}
      <Warning isOpen={hasError} setIsOpen={setHasError}>
        {errorMessage}
      </Warning>
    </>
  )
}

export default ErrorHandler
