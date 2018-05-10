import { connect } from 'react-redux'
import { APIComponent } from './API'
import { secure, unsecure } from '../../config/config.js'

const mapStatetoProps = state => {
  return {
  	unsecured: state.data.unsecure.message,
  	secured: state.data.secure.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	getUnsecuredData: () => dispatch({type: 'GET_API', url: unsecure, label: 'unsecure'}),
  	getSecuredData: (auth) => dispatch({type: 'GET_API', url: secure, label: 'secure', auth})
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(APIComponent)
