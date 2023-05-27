export type IMessageComponentProps = {
  domain: string
  token: string
  showError: boolean
  welcomeMessage: string
}

export type IValidateTokenResponse = {
  is_success: boolean
  data: any
  message: string
}

export type IWidgetUseState = {
  display: boolean
  widgetIconStyling: {
    bottom: number
    right: number
  }
  chatBoxDisplay: boolean
}
