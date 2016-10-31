//react 从0.14开始分离出来一个react-dom,
//react 中包含：createElement, createClass,Component,PropTypes,Children，
//react-dom 中包含：render,unmountComponentAtNode,findDOMNode，
//而且现在也不需要使用 this.refs.xxx.getDOMNode()或React.findDOMNode(this.refs.xxx)来获取真正的DOM节点，
//this.refs.todoInput 本身就指向了DOM节点 :<input refs="todoInput">
import React from 'react';
import {render} from 'react-dom';
import TodoList from './components/todoList'
import TodoInput from './components/TodoInput'

class TodoApp extends React.Component {

    render(){


        return (
            <div>
                <h1>TODO 清单</h1>
                <TodoInput actions={this.props.actions.addTodo}></TodoInput>
                <TodoList datas={this.props.datas} actions={this.props.actions}></TodoList>
            </div>
        )
    }
}
