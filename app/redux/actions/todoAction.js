import ACTION_TYPE from '../common/const_action_type'

let actions = {
    addTodo: function(text){
        return {
            type: ACTION_TYPE.TODO.ADD,
            text: text
        }
    },
    completeTodo: function(id){
        return {
            type: ACTION_TYPE.TODO.DELETE,
            id: id
        }
    }
}

export default actions
