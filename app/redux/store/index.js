import { applyMiddleware, compose, createStore } from 'redux'//compose 方法我们以后再用
import rootReducer from '../reducers'//combine后的所有reducers
import createLoggerMiddleware from 'redux-logger'//一个输出日志的中间件

// import thunk from 'redux-thunk'//用于异步请求:applyMiddleware(thunk)，也可以用redux-promise 或 redux-saga
import createSagaMiddleware from 'redux-saga'

import todoSaga from '../saga/sagas'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLoggerMiddleware()

/**
 * compose:从右到左来组合多个函数(reduceRight, currying)
 * @returns a new createStore
 */
const middlewares = [loggerMiddleware, sagaMiddleware]

let storyFactory = compose(applyMiddleware(...middlewares))(createStore)

/**
 * finnalCreateStore 一个app只能有一个store
 * @param initialstate
 * @returns {*}
 */
let configureStore = storyFactory(rootReducer)


// 运行saga
sagaMiddleware.run(todoSaga)

export default configureStore


// 如果不用compose(), 可以直接createStore(),注意参数顺序！
// const store = createStore(
//     rootReducer,
//     initial_state,
//     // enhancer
//     applyMiddleware(...middlewares)
// );
// sagaMiddleware.run(todoSaga)
// export default  store
