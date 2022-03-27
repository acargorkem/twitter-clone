import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// TODO REMOVE DUMMY USER
// it represents auth user
const userId = '62166083b55c662008f4a585'

interface IMessage {
  _id: string
  sender: string
  content: string
  conversation: string
  createdAt: string
  updatedAt: string
}

interface directMessageProps {
  messages: IMessage[]
}

const DirectMessages: React.FC<directMessageProps> = ({ messages }) => {
  if (!messages) {
    return null
  }

  if (messages.length <= 0) {
    return null
  }

  return (
    <Box>
      {messages.map((message, index) => {
        return (
          <Box key={index}>
            <Typography textAlign={message.sender == userId ? 'right' : 'left'}>
              {message.content}
            </Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default DirectMessages
