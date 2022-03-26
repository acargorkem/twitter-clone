import client from '../client'

export const getMessagesOfConversation = async (conversationId: string) => {
  return client.get(`/dm/message/${conversationId}`)
}

export const getConversationsOfUser = async () => {
  return client.get('dm/conversation')
}
