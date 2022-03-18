import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{ display: 'grid', placeItems: 'center', flex: '1' }}>
      <CircularProgress />
    </Box>
  )
}

export default Loading
