import React from 'react'
import TodoItem from './todoItem'

//UI Component
class TodoList extends React.Component {
    render(){
        return(
            <ul>
                {
                    this.props.datas.map((todo) => {
                        return <TodoItem key={todo.id} datas={todo} actions={this.props.actions}></TodoItem>
                    })
                }
            </ul>
        )
    }
}

export default TodoList
