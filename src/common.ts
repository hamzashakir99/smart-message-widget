import axios from 'axios'
import { IResponseError, IValidateTokenResponse, IAPIResponse } from './types/index'

const generalError: IResponseError = {
  is_success: false,
  message: 'something went wrong',
  data: [],
}

export const validateToken = async (domain: string, token: string): Promise<IValidateTokenResponse> => {
  try {
    const response: IAPIResponse = await axios.post('http://localhost:123', {
      domain,
      token,
    })
    if (response.status == 200 && response.data.is_success) {
      return {
        is_success: true,
        data: response.data.data,
        message: response.data.message,
      }
    } else {
      return {
        is_success: false,
        data: [],
        message: response.data.message,
      }
    }
  } catch (error) {
    console.error(error)
    return generalError
  }
}

export const updateUseStateWithPrevious = (stateFunction: any, object: any): void => {
  stateFunction((prev: any) => {
    return {
      ...prev,
      ...object,
    }
  })
}
