import React from 'react'
import ReactDOM from 'react-dom/client'
import { SmartMessage } from 'smart-message-widget'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <p>here is below component of smart message widget</p>
    <SmartMessage domain={''} token={''} showError={false} welcomeMessage={'Welcome to our website bot'} />
  </React.StrictMode>,
)
