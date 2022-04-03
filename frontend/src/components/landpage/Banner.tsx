import React from 'react'
import { Box } from '@mui/material'
import bgImage from '../../assets/landpage-banner.png'
import TwitterIcon from '@mui/icons-material/Twitter'

const Banner: React.FC = () => {
  return (
    <Box height={1} position={'relative'} flexBasis={'50%'}>
      <img
        src={bgImage}
        alt="blue banner image"
        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
      />
      <TwitterIcon
        style={{ fontSize: 500 }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          color: 'secondary.main',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </Box>
  )
}

export default Banner
