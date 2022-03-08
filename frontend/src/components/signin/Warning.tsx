import React from 'react'
import Alert from '@mui/material/Alert'

const Warning: React.FC<{ isUserExist: boolean }> = ({ isUserExist }) => {
  return (
    <>
      <Alert
        sx={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: isUserExist ? 'none' : 'flex',
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
