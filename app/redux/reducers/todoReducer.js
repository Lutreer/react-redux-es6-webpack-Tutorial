import ACTION_TYPE from '../common/const_action_type.js'

/**
 *
 * @param todos oldState
 * @param action
 * @returns {{newState}}
 */
let todoReducer = function(prevTodos = [], action){

    switch (action.type){
        case ACTION_TYPE.TODO.ADD:
            return [{
                id: Math.random().toFixed(1) * 100,
                text: action.text,
                complete: false
            }, ...prevTodos]

        case ACTION_TYPE.TODO.DELETE:
            return todos.filter(() => {
                prevTodos.id !== action.id
            })

        default:
            return prevTodos
    }
    return {}
}

export default todoReducer