import ACTION_TYPE from '../common/constActionType'

let actions = {
    addTodo: function(text){
        return {
            type: ACTION_TYPE.TODO.ADD,
            text: text
        }
    },
    deleteTodo: function(id){
        return {
            type:ACTION_TYPE.TODO.DELETE,
            id:id
        }
    },
    updateThisTodo: function(id,text){
        return {
            type:ACTION_TYPE.TODO.UPDATE,
            id:id,
            text:text
        }
    },
    completeTodo: function(id){
        return {
            type: ACTION_TYPE.TODO.COMPLETE,
            id: id
        }
    }
}

export default actions
