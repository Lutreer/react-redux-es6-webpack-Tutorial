import { applyMiddleware, compose, createStore } from 'redux'//compose 方法我们以后再用
import rootReducer from '../reducers'//combine后的所有reducers
import loggerMiddleware from 'redux-logger'//一个输出日志的中间件

// import thunk from 'redux-thunk'//用于异步请求:applyMiddleware(thunk)，也可以用redux-promise 或 redux-saga
import sagaMiddleware from 'redux-saga'
import todoSaga from '../saga/sagas'


/**
 * compose:从右到左来组合多个函数(reduceRight, currying)
 * @returns a new createStore
 */
const middlewares = [loggerMiddleware(), sagaMiddleware]

let finalCreateStore = compose(
    applyMiddleware(...middlewares)
)(createStore)

/**
 * finnalCreateStore 一个app只能有一个store
 * @param initialstate
 * @returns {*}
 */
let configureStore = function (initialstate = { todos: [], user: {}}) {
    return finalCreateStore(rootReducer, initialstate)
}

// 运行saga
sagaMiddleware.runSaga(todoSaga)

export default configureStore


//如果不用compose(), 可以直接createStore(),注意参数顺序！
// const store = createStore(
//   reducer,
//   initial_state,
//   enhancer //applyMiddleware(logger)
// );
//export default  store
