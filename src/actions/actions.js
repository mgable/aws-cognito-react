import fetch from 'cross-fetch';
import { call, put } from 'redux-saga/effects'

function* fetchPost(which){ 
	var label = which.label,
		auth = (which.auth && which.auth.info && which.auth.info.idToken && which.auth.info.idToken.jwtToken) || null,
		headers = {},
		data,
		response;

	if (auth){
		headers = {headers: {"authorization": which.auth.info.idToken.jwtToken}}
		console.info("I hae auth");
		console.info(which.label);
	} else {
		console.info("I have not auth");
		console.info(which.label);
	}

	response = yield call(fetch, which.url, headers);
	data = yield call([response, "json"]);

	yield put ({type: "DATA_RECEVIED", label, [label]:data})
}

export default fetchPost;
