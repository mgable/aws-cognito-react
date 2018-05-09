import { combineReducers } from 'redux'
import { reducer as authReducer } from 'aws-cognito-redux-saga'
import { reducer as formReducer } from 'redux-form'
import { reducer as dataReducer } from './data-reducer.js'


const reducers = combineReducers({
  auth: authReducer.reducer,
  form: formReducer,
  data: dataReducer
})

export default reducers

