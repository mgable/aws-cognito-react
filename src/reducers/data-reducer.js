const initialState = {"secure": "", "unsecure": ""}

export const reducer = (state = initialState, action) => {
	switch(action.type){
		case "DATA_RECEVIED": return dataReceived(state, action)
		default: return state
	}  
}

const dataReceived = (state, action) => {
	let label = action.label
	return Object.assign({}, state, {[label]: action[label]})
}