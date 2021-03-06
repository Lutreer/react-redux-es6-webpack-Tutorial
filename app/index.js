import "babel-polyfill";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import finalCreateStore from './redux/store';

//react-redux 提供两个API:Provider & connect(在./modules/todo/todo.js里有解释)
//Provider可以让容器内的所有子组件都可以拿到state
//原理是React组件的context属性，store放在了上下文对象context上面;然后，子组件就可以从context拿到store
import { Provider } from 'react-redux';

//自定义的组件

import TodoApp from './modules/todo'
import TodoApp2 from './modules/todo'
import Hello from './modules/hello/hello.jsx';
import './common/scss/index.scss';


let initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            text: '1111111111111111111111111111111111111'
        },
        {
            id: 1,
            completed: false,
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbb'
        }
    ],
    user: {
        username: 'tom',
        id: 1
    }
}


let initialState2 = {
    todos: [{
            id: 0,
            completed: false,
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        {
            id: 1,
            completed: false,
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbb'
        }],
    user: {
        username: 'tom',
        id: 1
    }
}
let store = finalCreateStore
let store2 = finalCreateStore

ReactDOM.render(
        <div className="container">
            <Provider store={store}>
                <TodoApp/>
            </Provider>
            <Provider store={store2}>
                <TodoApp2/>
            </Provider>
        </div>

, document.querySelector("#app"))
