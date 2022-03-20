import React from 'react'
import Alert from '@mui/material/Alert'

const Warning: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <Alert
        sx={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
        }}
        severity="info"
        variant="filled"
      >
        {children}
      </Alert>
    </>
  )
}

export default Warning
