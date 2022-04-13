import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const MainWrapper: React.FC = ({ children }) => {
  return (
    <Stack direction="row" spacing="1rem" sx={{ maxWidth: 990 }}>
      <Box
        sx={{
          flexShrink: { md: 0, xs: 1 },
          borderColor: 'grey.200',
          borderStyle: 'solid',
          borderWidth: '0 1px',
          maxWidth: 600,
          minWidth: { md: 500, xs: 'unset' },
        }}
      >
        {children}
      </Box>
      <Box sx={{ flex: '1 1 40%', display: { md: 'block', xs: 'none' } }}>
        What to follow!
      </Box>
    </Stack>
  )
}

export default MainWrapper
