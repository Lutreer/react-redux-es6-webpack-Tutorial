import { applyMiddleware, compose, createStore } from 'redux'//compose 方法我们以后再用
import rootReducer from './reducers'//combine后的所有reducers
import logger from 'redux-logger'//一个输出日志的中间件
import thunk from 'redux-thunk'//用于异步请求:applyMiddleware(thunk)，也可以用redux-promise

//finnalCreateStore 一个app只能有一个store
let finalCreateStore = (initialState) => {
    //createStore(reducer,state,enhancer)
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    )
    return store
}

export default finalCreateStore
