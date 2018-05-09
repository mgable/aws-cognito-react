import fetch from 'cross-fetch';
import { call, put } from 'redux-saga/effects'

function* fetchPost(which){ 
	console.info("fetchpost");
	console.info(which);
	var label = which.label
	var response = yield call(fetch, which.url, {}),
		data = yield call([response, "json"]);

	yield put ({type: "DATA_RECEVIED", label, [label]:data})
}

export default fetchPost;
