import React, { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import {
  getConversationsOfUser,
  getMessagesOfConversation,
} from '../../api/lib/directMessage'
import client from '../../api/client'
import DirectMessages from './DirectMessages'
import Conversations from './Conversations'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

const user = {
  username: 'username1',
  password: 'password',
}

interface message {
  sender: string
  content: string
  conversation: string
  _id: string
  createdAt: string
  updatedAt: string
}

interface IConversation {
  _id: string
  members: string[]
  createdAt: string
  updatedAt: string
}

const URL = 'http://localhost:5000'

const socket: Socket = io(URL)

const DirectMessageContainer: React.FC = () => {
  const [messages, setMessages] = useState<Array<message>>([])
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [conversations, setConversations] = useState<Array<IConversation>>([])

  useEffect(() => {
    // TODO remove login logic after auth provided on FE
    const login = async () => {
      await client.post('/user/login', user)
    }
    login()
    if (conversationId) {
      socket.emit('join-conversation', conversationId)
    }
    const getConversations = async () => {
      const result = await getConversationsOfUser()
      setConversations(result.data.conversations)
    }
    getConversations()
  }, [conversationId])

  useEffect(() => {
    socket.on('messages-updated', async () => {
      if (!conversationId) return null
      const result = await getMessagesOfConversation(conversationId)
      setMessages(result.data.messages)
    })
  }, [conversationId])

  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <Conversations
          conversations={conversations}
          setConversationId={setConversationId}
        />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ flex: 1 }}>
        <DirectMessages messages={messages} />
      </Box>
    </Box>
  )
}

export default DirectMessageContainer
