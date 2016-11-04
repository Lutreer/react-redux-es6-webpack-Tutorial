import { combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    userReducer: userReducer,
    todoReducer: todoReducer
})
debugger
export default rootReducer
