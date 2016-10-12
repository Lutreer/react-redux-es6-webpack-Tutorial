import React, { Component } from 'react';


class TodoInput extends Component{
  constructor() {
    supper()
    this.state = {
        placeholder: 'Please input TODO here',
        todoValue:''
    }
  }

  createNewTodo = (a, b) => {
    alert(a + b)
  }



  render(){

    return(
      <div>
        <div>
          <input
          placeholder={this.state.placeholder}
          value={this.state.todoValue}
          />

          <button onClick={this.createNewTodo(this.state.placeholder, 'just string')}>ADD</button>
        </div>



      </div>

    )
  }


}
