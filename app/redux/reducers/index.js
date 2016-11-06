import { combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    //key 值要跟 state 的 key 相同
    user: userReducer,
    todos: todoReducer
})
export default rootReducer
