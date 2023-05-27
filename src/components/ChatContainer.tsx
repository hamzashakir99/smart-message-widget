import React, { useState } from 'react'
import {
  ChatContainer,
  ConversationHeader,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  InfoButton,
  MessageSeparator,
  TypingIndicator,
  InputToolbox,
  AttachmentButton,
  SendButton,
} from '@chatscope/chat-ui-kit-react'

const ChatContainerCom = () => {
  const [chat, setChat] = useState([
    {
      message: 'Hello my friend',
      sentTime: '15 mins ago',
      sender: 'Emily',
      direction: 'incoming',
      position: 'single',
    },
    {
      message: 'Hello my friend',
      sentTime: '15 mins ago',
      sender: 'localSender',
      direction: 'outgoing',
      position: 'single',
    },
  ])
  console.log(chat.length)
  return (
    <>
      <ChatContainer>
        <ConversationHeader>
          <Avatar src={'emilyIco'} name='Emily' />
          <ConversationHeader.Content userName='Emily' info='Active 10 mins ago' />
          <ConversationHeader.Actions>
            <InfoButton />
          </ConversationHeader.Actions>
        </ConversationHeader>
        <MessageList typingIndicator={<TypingIndicator content='Emily is typing' />}>
          <MessageSeparator content='Saturday, 30 November 2019' />
          {chat.map((item: any) => {
            return item.sender == 'localSender' ? (
              <Message
                model={{
                  message: item.message,
                  sentTime: item.sentTime,
                  sender: item.sender,
                  direction: item.direction,
                  position: item.position,
                }}
              />
            ) : (
              <Message
                model={{
                  message: item.message,
                  sentTime: item.sentTime,
                  sender: item.sender,
                  direction: item.direction,
                  position: item.position,
                }}
              >
                <Avatar src={'emilyIco'} name={'Emily'} />
              </Message>
            )
          })}
          <MessageSeparator content='Saturday, 31 November 2019' />
          {chat.map((item: any) => {
            return item.sender == 'localSender' ? (
              <Message
                model={{
                  message: item.message,
                  sentTime: item.sentTime,
                  sender: item.sender,
                  direction: item.direction,
                  position: item.position,
                }}
              />
            ) : (
              <Message
                model={{
                  message: item.message,
                  sentTime: item.sentTime,
                  sender: item.sender,
                  direction: item.direction,
                  position: item.position,
                }}
              >
                <Avatar src={'emilyIco'} name={'Emily'} />
              </Message>
            )
          })}
        </MessageList>
        <MessageInput placeholder='Type message here' sendButton={false} attachButton={false} />
        <InputToolbox>
          <AttachmentButton />
          <SendButton
            onClick={() => {
              setChat((prev: any) => [
                ...prev,
                {
                  message: 'Hello my friend',
                  sentTime: '15 mins ago',
                  sender: 'localSender',
                  direction: 'outgoing',
                  position: 'single',
                },
              ])
            }}
          />
        </InputToolbox>
      </ChatContainer>
    </>
  )
}

export default ChatContainerCom
