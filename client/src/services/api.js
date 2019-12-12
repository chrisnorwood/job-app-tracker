import ky from 'ky'

export const baseUrl = '/api'
export const loginUrl = `${baseUrl}/auth/login`
export const signupUrl = `${baseUrl}/auth/register`

// Protected
export const appsUrl = `${baseUrl}/applications`
export const profileUrl = `${baseUrl}/users/current`

// Authentication
export const loginUser = async (userObject) => {
  // Takes userObject in format: { email, password }
  const result = await ky.post(loginUrl, { json: userObject }).then(res => res.json())

  return result
}

export const signupUser = async (userObject) => {
  // Takes userObject in format: { email, password, passwordConf }
  const result = await ky.post(signupUrl, { json: userObject }).then(res => res.json())

  return result
}


// User Profile
export const getUser = async () => {
  const result = await ky.get(profileUrl, createHeaders()).then(res => res.json())

  return result
}


// INTERNAL FUNCTIONS
// Gets Token from Local Storage
const getToken = () => {
  return localStorage.getItem('token')
}

const createHeaders = () => {
  return {
    headers: {
      authorization: `Bearer ${getToken()}`
    }
  }
}
