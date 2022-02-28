import { Box } from '@mui/system'
import React from 'react'
import Hashtag from './Hashtag'
import Button from '@mui/material/Button'

const TopHashTag: React.FC<{ hashTags: { name: string }[] }> = ({
  hashTags,
}) => {
  return (
    <Box
      display={'flex'}
      gap={1}
      alignItems={'baseline'}
      flexWrap={'wrap'}
      marginTop={2}
    >
      {hashTags.map((hashtag, index) => (
        <Hashtag key={index}>{hashtag.name}</Hashtag>
      ))}
      <Button variant="text">Daha fazla göster</Button>
    </Box>
  )
}

export default TopHashTag
