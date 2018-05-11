import React from 'react'
import PropTypes from 'prop-types'
import Route from 'react-router-dom/Route'
import Redirect from 'react-router-dom/Redirect'
import { state } from 'aws-cognito-redux-saga'

class PrivateRoute extends React.Component {
  static propTypes = {
    auth: PropTypes.object
  }

  render() {
    let { auth } = this.props
    console.info(auth);
    console.info(state);
    return (
      <Route
        render={() => {
          return auth.isSignedIn === state.AUTH_SUCCESS ? (
            <this.props.component />
          ) : (
            <Redirect to="/landing" />
          )
        }}
      />
    )
  }
}

export default PrivateRoute
