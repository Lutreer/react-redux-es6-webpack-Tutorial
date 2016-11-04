import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import finalCreateStore from './redux/store';

//react-redux 提供两个API:Provider & connect(在./modules/todo/todo.js里有解释)
//Provider可以让容器内的所有子组件都可以拿到state
//原理是React组件的context属性，store放在了上下文对象context上面;然后，子组件就可以从context拿到store
import { Provider } from 'react-redux';

//自定义的组件

import TodoApp from './modules/todo'
debugger
import Hello from './modules/hello/hello.jsx';
import './common/scss/index.scss';


//正常情况是从服务端获取渲染页面的初始值
let initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            text: 'Initial todo for demo purposes'
        },
        {
            id: 1,
            completed: false,
            text: 'Initial todo for demo purposes'
        }
    ],
    user: {
        username: 'leasong',
        id: 1
    }
}
let store = finalCreateStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>
, document.querySelector("#app"))
