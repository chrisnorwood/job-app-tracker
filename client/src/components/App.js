import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../contexts/AuthContext'
import PublicRoute from './hoc/PublicRoute'
import PrivateRoute from './hoc/PrivateRoute'
import Nav from './layout/Nav'
import Index from './pages/Index'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Logout from './pages/Logout'
import Apps from './pages/Apps'

const App = () => (
  <AuthProvider>
    <Router>
      <Nav />
      <div className='container'>
        <Switch>
          <PublicRoute path='/' exact restricted={false} component={Index} />
          <PublicRoute path='/login' restricted={true} component={Login} />
          <PublicRoute path='/signup' restricted={true} component={Signup} />
          <PublicRoute path='/logout' restricted={false} component={Logout} />
          <PrivateRoute path='/apps' component={Apps} />
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </div>
    </Router>
    <ToastContainer autoClose={3000} />
  </AuthProvider>
)

export default App
