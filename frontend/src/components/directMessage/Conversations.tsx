import React from 'react'
import Box from '@mui/material/Box'

interface IConversation {
  _id: string
  members: string[]
  createdAt: string
  updatedAt: string
}

interface conversationsProps {
  conversations: IConversation[]
  setConversationId: React.Dispatch<React.SetStateAction<string | null>>
}

const Conversations: React.FC<conversationsProps> = ({
  conversations,
  setConversationId,
}) => {
  const onClickHandle = (conversationId: string) => {
    setConversationId(conversationId)
  }

  return (
    <Box>
      {conversations.map((conversation) => {
        return (
          <Box
            key={conversation._id}
            onClick={() => onClickHandle(conversation._id)}
          >
            {conversation._id}
          </Box>
        )
      })}
    </Box>
  )
}

export default Conversations
