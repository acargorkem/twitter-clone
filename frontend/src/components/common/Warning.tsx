import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'

const Warning: React.FC = () => {
  const [warn, setWarn] = useState(true)

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setWarn(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, [])

  return (
    <>
      <Alert
        sx={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: warn ? 'flex' : 'none',
        }}
        severity="info"
        variant="filled"
      >
        Sorry, we could not find your account.
      </Alert>
    </>
  )
}

export default Warning
