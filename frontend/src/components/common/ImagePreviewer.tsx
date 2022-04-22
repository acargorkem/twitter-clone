import React from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'

interface ImagePreviewerProps {
  image: Blob
  removeImage: () => void
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 5,
  left: 5,
  backgroundColor: theme.palette.grey[700],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
  },
}))

const ImagePreviewer: React.FC<ImagePreviewerProps> = ({
  image,
  removeImage,
}) => {
  return (
    <Box sx={{ height: 'inherit', width: 1, position: 'relative' }}>
      <StyledIconButton
        color="secondary"
        aria-label="remove picture"
        size="small"
        onClick={removeImage}
      >
        <CloseIcon />
      </StyledIconButton>
      <img
        src={URL.createObjectURL(image)}
        width="100%"
        height="100%"
        style={{ borderRadius: '10px' }}
      />
    </Box>
  )
}

export default ImagePreviewer
