import { connect } from 'react-redux'
import { APIComponent } from './API'
//import { getData } from './actions.js'

const mapStatetoProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {getData: () => dispatch({type: 'GET_API'})}
}

export default connect(mapStatetoProps, mapDispatchToProps)(APIComponent)
