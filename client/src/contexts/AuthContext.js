import React, { createContext, useContext, useReducer } from 'react'

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
      localStorage.setItem("auth", { token: action.payload.token, user: action.payload.user })
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
