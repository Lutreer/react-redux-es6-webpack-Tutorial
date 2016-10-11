import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import finalCreateStore from './redux/store';
import { Provider } from 'react-redux';//可以让容器组件拿到state

//自定义的组件
import Hello from './modules/hello/hello.jsx';
import './common/scss/index.scss';

//正常情况是从服务端获取渲染页面的初始值
let initialState = {

}


let store = finnalCreateStore((initialState)


ReactDOM.render(
    <provider store="Store">
        <Hello name = "React" />
    </provider>
, document.querySelector("#app"))
