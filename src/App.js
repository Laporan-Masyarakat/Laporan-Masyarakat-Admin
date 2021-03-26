import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginScreen from './Auth/LoginScreen'
import HomeScreen from './Components/HomeScreen'

function App() {
  const [state, setState] = useState({
    loggedIn: false,
    user: {},
  })

  return (
    <>
      <Router>
        <Switch>
          {/* login screen */}
          <Route
            exact
            path="/"
            render={(props) => (
              <LoginScreen {...props} data={state} setData={setState} />
            )}
          />

          <Route
            render={(props) => (
              <HomeScreen {...props} data={state} setData={setState} />
            )}
          />
        </Switch>
      </Router>
    </>
  )
}

export default App
