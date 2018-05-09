export const reducer = (state = {}, action) => {
	switch(action.type){
		case "DATA_RECEVIED": return action.data
		default: return state
	}  
}