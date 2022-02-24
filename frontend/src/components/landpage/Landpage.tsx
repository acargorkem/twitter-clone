import React from 'react'
import Box from '@mui/material/Box'
import UserSeeSection from './UserSeeSection'
import UserSignSection from './UserSignSection'

const Landpage: React.FC = () => {
  return (
    <>
      <Box width={'100vw'} height={'100vh'} display={'flex'}>
        <UserSeeSection />
        <UserSignSection />
      </Box>
    </>
  )
}

export default Landpage
