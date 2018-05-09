import { all, takeEvery } from 'redux-saga/effects'
import { sagas } from 'aws-cognito-redux-saga'
import fetchPost from '../actions/actions'

function* watchIncrementAsync() {
	try {
		yield takeEvery('GET_API', fetchPost)
	}catch(e){
		console.error("there was an error ", e)
	}
}


export default function* root() {
  yield all([sagas, /*helloSaga(),*/ watchIncrementAsync()])
}
