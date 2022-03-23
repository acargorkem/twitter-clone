import Warning from '../login/Warning'
import React, { useEffect, useState } from 'react'
import axiosClient from '../../api/client'

const ErrorHandler: React.FC = ({ children }) => {
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    axiosClient.interceptors.request.use(function (request) {
      return request
    })

    axiosClient.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        const errorMessage = error.response
          ? error.response.data.error
          : 'Network Error'
        setHasError(true)
        setErrorMessage(errorMessage)

        return Promise.reject(error)
      },
    )
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setHasError(false)
    }, 4000)
  }, [hasError])

  return (
    <>
      {children}
      {hasError && <Warning>{errorMessage}</Warning>}
    </>
  )
}

export default ErrorHandler
