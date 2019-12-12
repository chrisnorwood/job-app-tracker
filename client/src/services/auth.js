import * as api from './api'
import { toast } from 'react-toastify'

// Sends API request and 
export const handleLogin = async (userObject) => {
  // Takes userObject in format: { email, password }
  try {
    const response = await api.loginUser(userObject)
    console.log(response)
    toast.success(response.message, { position: 'bottom-right' })
    return response
  } catch (error) {
    const errorResponse = await error.response.json()
    console.log('Server error: ', errorResponse.message)
    toast.error(errorResponse.message, { position: 'bottom-right' })
    throw new Error('Error processing request.')
  }
}

export const handleSignup = async (userObject) => {
  // Takes userObject in format: { email, password, passwordConf }
  try {
    const response = await api.signupUser(userObject)
    console.log(response)
    toast.success(response.message, { position: 'bottom-right' })
    return response
  } catch (error) {
    const errorResponse = await error.response.json()
    console.log('Server error: ', errorResponse.message)
    toast.error(errorResponse.message, { position: 'bottom-right' })
    throw new Error('Error processing request.')
  }
}
