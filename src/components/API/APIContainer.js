import { connect } from 'react-redux'
import { APIComponent } from './API'

const mapStatetoProps = state => {
	console.info("the state");
	console.info(state);
  return {
  	unsecured: state.data.unsecure.message,
  	secured: state.data.secure.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	getUnsecuredData: () => dispatch({type: 'GET_API', url: "https://lpux8rupw5.execute-api.us-west-1.amazonaws.com/PROD/test", label: 'secure'}),
  	getSecuredData: () => dispatch({type: 'GET_API', url: "https://lpux8rupw5.execute-api.us-west-1.amazonaws.com/PROD/mytest", label: 'unsecure'})
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(APIComponent)
