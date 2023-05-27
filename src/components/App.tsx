import React, { useState, useEffect } from 'react'
import { IMessageComponentProps, IValidateTokenResponse, IWidgetUseState, ISocketUseState } from '../types/index'
import { validateToken, updateUseStateWithPrevious } from '../common'
import { socket } from '../socket'
import { ToolIcon, ChatContainerCom } from '../index'
import '../message.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
const SmartMessage = ({ domain, token, showError }: IMessageComponentProps) => {
  const [widget, setWidget] = useState<IWidgetUseState>({
    display: true,
    widgetIconStyling: {
      bottom: 0,
      right: 10,
    },
    chatBoxDisplay: true,
  })
  const [socketState, setSocketState] = useState<ISocketUseState>({
    isConnected: false,
  })
  const loadWidget = async (): Promise<void> => {
    try {
      const isValidToken: IValidateTokenResponse = await validateToken(domain, token)
      if (isValidToken.is_success) {
        updateUseStateWithPrevious(setWidget, {
          display: true,
        })
      } else {
        if (showError) {
          alert(isValidToken.message)
        }
      }
    } catch (err) {
      console.error(err)
      if (showError) {
        alert('something went wrong on loading the widget')
      }
    }
  }
  useEffect(() => {
    loadWidget()
      .then()
      .catch((error) => {
        console.log(error)
      })
    function onConnect() {
      updateUseStateWithPrevious(setSocketState, {
        isConnected: true,
      })
    }
    function onDisconnect() {
      updateUseStateWithPrevious(setSocketState, {
        isConnected: false,
      })
    }
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {widget.display ? (
        <>
          <div
            style={{
              position: 'relative',
              zIndex: 100,
              bottom: widget.widgetIconStyling.bottom,
              right: widget.widgetIconStyling.right,
              width: 500,
            }}
          >
            {/**
             * ! chat box display
             */}
            {widget.chatBoxDisplay ? (
              <div
                style={{
                  height: '500px',
                }}
              >
                <ChatContainerCom />
              </div>
            ) : null}
            {/**
             * ! Tool widget icon
             */}
            <div
              onClick={() =>
                updateUseStateWithPrevious(setWidget, {
                  chatBoxDisplay: widget.chatBoxDisplay,
                })
              }
            >
              <ToolIcon />
            </div>
          </div>
        </>
      ) : null}
      {socketState.isConnected}
    </>
  )
}

export default SmartMessage
