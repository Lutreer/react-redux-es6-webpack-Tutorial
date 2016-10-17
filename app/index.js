import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import finalCreateStore from './redux/store/index.js';
import { Provider } from 'react-redux';//可以让容器组件拿到state

//自定义的组件
import Hello from './modules/hello/hello.jsx';
import './common/scss/index.scss';
var a = "sdfsdfsdf";
//正常情况是从服务端获取渲染页面的初始值
let initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            text: 'Initial todo for demo purposes'
        },
        {
            id: 0,
            completed: false,
            text: 'Initial todo for demo purposes'
        }
    ],
    user: {
        username: 'kurt',
        id: 13
    }
}


let Store = finnalCreateStore(initialState)


ReactDOM.render(
    <provider store={Store}>
        <Hello name = "React" />
    </provider>
, document.querySelector("#app"))
