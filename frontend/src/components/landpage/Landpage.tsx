import React from 'react'
import Box from '@mui/material/Box'
import SignInUp from './SignInUp'
import Banner from './Banner'
import { useTheme, useMediaQuery } from '@mui/material'

const Landpage: React.FC = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <Box
        width={'100vw'}
        height={'100vh'}
        display={'flex'}
        flexDirection={isSmall ? 'column-reverse' : 'row'}
      >
        <Banner />
        <SignInUp />
      </Box>
    </>
  )
}

export default Landpage
