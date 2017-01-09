import { call, put, takeEvery, takeLatest } from 'redux-saga'
import todoApi from '../common/api/todo/todoApis'

function* fetchTodos(action) {
    debugger

    // put(action) 等同于 dispatch(action), 其中 action 不产生副作用
    yield put({ type: 'FETCH_LOADING' })
    try{
        // 这里的 action 会产生副作用，所以使用 call(fn, ...args); args 会作为 fn 的参数
        const todos = yield call(todoApi.fetchTodosByPage, action.payload.page)

        // 此 action 一样不会产生副作用（side effects）；所以同 FETCH_LOADING 用put
        yield put({ type: 'FETCH_SUCCEEDED' }, todos)

    }catch (e) {
        // 如果请求失败或其他错误
        yield put({ type: 'FETCH_FAILED', msg: e.msg })

    }
}


function* todoSaga() {

    // 注意 takeEvery(pattern, saga, ...args) 和 takeLatest(pattern, saga, ...args) 的区别
    // takeEvery() 会监控所有的 saga 任务
    // yield takeEvery("USER_FETCH_REQUESTED", fetchUser)

    // takeLatest() 只会监控最新的一个 saga 任务, 比如说用于用户的连续点击
    yield takeLatest("SELECT_ALL_TODOS", fetchTodos)

}

export default todoSaga;