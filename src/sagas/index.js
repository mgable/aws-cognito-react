import { all, put, takeEvery, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { sagas } from 'aws-cognito-redux-saga'

import fetch from 'cross-fetch';


function* fetchPost(){ 
	var response = yield call(fetch,'https://lpux8rupw5.execute-api.us-west-1.amazonaws.com/PROD/mytest', {}),
		data = yield call([response, "json"]);
	yield put ({type: "DATA_RECEVIED", data})
}

// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }

function* incrementAsync() {
	console.info("incrementAsync was called");
	yield call (delay, 1000)
	yield put({type: 'INCREMENT'});
}

function* watchIncrementAsync() {
	console.info(" watchIncrementAsync was called");
	yield takeEvery('GET_API', fetchPost)
}


export default function* root() {
  yield all([sagas, /*helloSaga(),*/ watchIncrementAsync()])
}
