import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import PublicRoute from './hoc/PublicRoute'
import PrivateRoute from './hoc/PrivateRoute'
import Nav from './Nav'
import Index from './pages/Index'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Apps from './pages/Apps'

function App() {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <AuthProvider value={false}>
        <Nav />
        <Router>
          <Switch>
            <PublicRoute path='/' exact restricted={false} component={Index} />
            <PublicRoute path='/login' restricted={true} component={Login} />
            <PublicRoute path='/signup' restricted={true} component={Signup} />
            <PrivateRoute path='/apps' component={Apps} />
            <Route render={() => <h1>404</h1>}/>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
