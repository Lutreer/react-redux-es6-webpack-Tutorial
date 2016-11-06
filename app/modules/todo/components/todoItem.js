import React from 'react'

// 这是一个 UI 组件（presentational component）,
// 它的外层需要为 UI 组件提供props（即数据和方法）
//
// UI 组件的特征：
// 1.只负责 UI 的呈现，不带有任何业务逻辑
// 2.没有状态（即不使用this.state这个变量）
// 3.所有数据都由参数（this.props）提供
// 4.不使用任何 Redux 的 API
class  TodoItem extends React.Component {

    updateThis = (event) => {
        this.props.actions.updateThisTodo(this.props.datas.id,this.props.datas.text)
    }

    handleComplete = (event) => {
        this.props.actions.completeTodo(this.props.datas.id)
    }

    handleDelete = (event) => {
        this.props.actions.deleteTodo(this.props.datas.id)
    }

    render() {
        return (
            <li>
                <div>{this.props.datas.text}</div>
                <button onClick={this.updateThis}>更新不改变，测试不可变对象</button>
                <button onClick={this.handleComplete}>标记为已完成</button>
                <button onClick={this.handleDelete}>删除这条TODO</button>
            </li>
        )
    }
}

export default TodoItem
