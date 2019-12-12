import { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'

const Logout = ({ history }) => {
  const { dispatch } = useAuth();

  useEffect(() => {
    dispatch({ type: "LOGOUT" })
    toast.success('Logged out.', { position: 'bottom-right' })
    history.push('/')
  }, [history, dispatch])

  return null
}

export default Logout
