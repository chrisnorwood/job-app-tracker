import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { getUser } from '../services/api'

const AuthContext = createContext()

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

// Perhaps this function should not have side effects?
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState)

  useEffect(() => {
    // Check if auth token already exists
    const token = localStorage.getItem('token')
    if (token) {
      // Log user in
      getUser().then(userResponse => {
        // Put user in application state
        dispatch({
          type: "LOGIN",
          payload: {
            user: userResponse.user,
            token,
          }
        })
      }).catch(error => {
        // Log user out if the token was bad/outdated
        dispatch({ type: "LOGOUT" })
      });
    }
  }, [dispatch])

  return (
    <AuthContext.Provider
      value={{
        authState,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export const useAuth = () => useContext(AuthContext)
