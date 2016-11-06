//react 从0.14开始分离出来一个react-dom,
//react 中包含：createElement, createClass,Component,PropTypes,Children，
//react-dom 中包含：render,unmountComponentAtNode,findDOMNode，
//而且现在也不需要使用 this.refs.xxx.getDOMNode()或React.findDOMNode(this.refs.xxx)来获取真正的DOM节点，
//this.refs.todoInput 本身就指向了DOM节点 :<input refs="todoInput">
import React from 'react';
import {render} from 'react-dom';

//作用：连接 React 组件与 Redux store。这样就可以在组件获取
//连接操作不会改变原来的组件类，反而返回一个新的已与 Redux store 连接的组件类,
//<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。
//正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。
import {connect} from 'react-redux'

//把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
//一般情况下你可以直接在 Store 实例上调用 dispatch。如果你在 React 中使用 Redux，react-redux 会提供 dispatch 。
//惟一使用 bindActionCreators 的场景是当你需要把 action creator 往下传到一个组件上，却不想让这个组件觉察到 Redux 的存在，
//而且不希望把 Redux store 或 dispatch 传给它。
import { bindActionCreators } from 'redux'

import todoActions from '../../redux/actions/todoAction'
import userActions from '../../redux/actions/userAction'

import TodoList from './components/todoList'
import TodoInput from './components/TodoInput'

//这样引入样式文件
import './todo.scss'

class TodoApp extends React.Component {

    render(){
        return (
            <div className="submitBtn">
                <h1>TODO 清单</h1>
                {/* 我的约定：datas传data，actions传action */}
                {/* 我们给 <TodoInput/> 传入了特定的 action:addTodo,在 <TodoInput/> 可以直接且只能通过 this.props.actions.addTodo(text) 添加todo */}
                <TodoInput actions={this.props.todoActions.addTodo}></TodoInput>

                {/* 我们可以只给 <TodoList/> 传入 todo 的数据，否则无关的数据会导致每次 action 都触发整个 TodoApp 重新渲染 */}
                {/* ### 所以，注意了！不要一股脑的注入 dispatch 和全局 state， 这样几乎所有你的优化都将泡汤，组件需要什么就给它什么。### */}
                <TodoList datas={this.props.todos} actions={this.props.todoActions}></TodoList>
            </div>
        )
    }
}


function mapStateToProps(state) {
  return {
      todos: state.todos,
      user: state.user
  }
}

//把 action creators 转成拥有同名 keys 的对象，
//但是是使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们
//eg.在 TodoInput.js 中: this.props.actions.createNewTodo(text),这里我们并没有 dispatch 一个action,
function mapDispatchToProps(dispatch) {
  return {
        todoActions: bindActionCreators(todoActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
