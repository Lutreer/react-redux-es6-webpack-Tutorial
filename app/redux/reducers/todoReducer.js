import ACTION_TYPE from '../common/constActionType'

let getUniqueId = function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}


/**
 *
 * @param todos oldState
 * @param action
 * @returns {{newState}}
 */
let todoReducer = function(todos = [], action) {

    switch (action.type) {
        case ACTION_TYPE.TODO.ADD:
            return [ ...todos,{
                id: getUniqueId(todos),
                text: action.text,
                complete: false
            }]

        case ACTION_TYPE.TODO.DELETE:
            return todos.filter(todo => todo.id !== action.id)
        case ACTION_TYPE.TODO.COMPLETE:
            return todos.map((todo) => {
                return todo.id === action.id ?
                    Object.assign({}, todo, {
                        completed: !todo.completed
                    }) : todo
            })
        default:
            return todos
    }
}

export default todoReducer
