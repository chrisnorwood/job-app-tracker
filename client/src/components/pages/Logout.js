import { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'

const Logout = ({ history }) => {
  const { dispatch } = useAuth();

  useEffect(() => {
    dispatch({ type: "LOGOUT" })
    toast.success('Logged out.', { position: 'top-center' })
    history.push('/')
  }, [history, dispatch])

  return null
}

export default Logout
