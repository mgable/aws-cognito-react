import React from 'react'
import PropTypes from 'prop-types'

import { config } from 'aws-cognito-redux-saga'

class Auth extends React.Component {
  static propTypes = {
    getUser: PropTypes.func
  }

  componentWillMount() {
    config.config.set({
      region: 'us-east-2',
      IdentityPoolId: '',
      UserPoolId: 'us-east-2_qxqUefMAV',
      ClientId: '2ka6id4bllh6a81os1fv5774tj'
    })

    this.props.getUser()
  }

  render() {
    return null
  }
}

export default Auth
