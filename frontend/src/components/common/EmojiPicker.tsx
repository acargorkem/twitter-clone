import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/material'
import 'emoji-mart/css/emoji-mart.css'
import { Picker, BaseEmoji } from 'emoji-mart'
import Popover from '@mui/material/Popover'

interface EmojiPickerProps {
  onEmojiSelect: (emoji: BaseEmoji) => void
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onEmojiSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Box>
      <IconButton
        color="primary"
        aria-label="select image"
        component="span"
        onClick={handleClick}
      >
        <EmojiEmotionsOutlinedIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Picker set="apple" onSelect={onEmojiSelect} />
      </Popover>
    </Box>
  )
}

export default EmojiPicker
