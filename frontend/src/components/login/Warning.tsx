import React from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { Snackbar } from '@mui/material'
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={2} ref={ref} variant="filled" {...props} />
})

const Warning: React.FC<{
  children: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ children, isOpen, setIsOpen }) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setIsOpen(false)
  }
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          {children}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Warning
