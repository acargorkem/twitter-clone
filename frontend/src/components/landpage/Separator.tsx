import React from 'react'
import { Box } from '@mui/material'

const Separator: React.FC = () => {
  return (
    <Box
      display={'flex'}
      width={'70%'}
      alignItems={'center'}
      marginTop={'10px'}
    >
      <Box height={'1px'} flex={'1'} bgcolor={'#eff3f4'}></Box>
      <Box margin={'0 1rem'}>
        <span>or</span>
      </Box>
      <Box height={'1px'} flex={'1'} bgcolor={'#eff3f4'}></Box>
    </Box>
  )
}

export default Separator
