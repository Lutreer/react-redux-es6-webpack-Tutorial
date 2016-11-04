import React from 'react';


class TodoInput extends React.Component{


    createNewTodo = (event) => {
        debugger 
        event.preventDefault()
        event.stopPropagation()
        let text = this.refs.createInput.value
        this.props.actions.addTodo(text)
    }

    render(){

        return(
            <div>
                <form onSubmit = {this.createNewTodo}>
                    <input type="text" refs="createInput" placeholder="请输入要做的事情..."/>
                    <button type="submit" className="submitBtn">新增</button>
                </form>
            </div>
        )
    }
}

export default TodoInput
