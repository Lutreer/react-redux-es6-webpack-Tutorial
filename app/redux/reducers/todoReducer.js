import ACTION_TYPE from '../common/constActionType'

/**
 *
 * @param todos oldState
 * @param action
 * @returns {{newState}}
 */
let todoReducer = function(prevTodos = [], action) {

    switch (action.type) {
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
            case ACTION_TYPE.TODO.COMPLETE:
                return todos.map((todo) => {
                    return todo.id === action.id ?
                        Object.assign({}, todo, {
                            completed: !todo.completed
                        }) : todo
                })

        default:
            return prevTodos
    }
    return {}
}

export default todoReducer
