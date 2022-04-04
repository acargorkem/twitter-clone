import Box from '@mui/material/Box'
import React from 'react'

const MainWrapper: React.FC = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', gap: '1rem', maxWidth: 1000 }}>
      <Box sx={{ width: '60%', border: '2px solid black' }}>{children}</Box>
      <Box sx={{ width: '40%' }}>What to follow!</Box>
    </Box>
  )
}

export default MainWrapper
