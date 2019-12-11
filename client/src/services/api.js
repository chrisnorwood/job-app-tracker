import ky from 'ky'

export const baseUrl = '/api'
export const loginUrl = `${baseUrl}/auth/login`
export const signupUrl = `${baseUrl}/auth/register`

// Protected
export const appsUrl = `${baseUrl}/applications`

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
