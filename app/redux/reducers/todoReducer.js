import ACTION_TYPE from '../common/constActionType'
import immutable from 'immutable'

let getUniqueId = function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let allTodos = [
    { id: 0, completed: false, text: '1111111111111111111'},
    { id: 1, completed: false, text: '222222222222222222'},
    { id: 2, completed: false, text: '333333333333333333'},
    { id: 3, completed: false, text: '44444444444444444'},
    { id: 4, completed: false, text: '5555555555555555555555555555555'},
    { id: 5, completed: false, text: '6666666666666666666666666666'},
    { id: 6, completed: false, text: '777777777777777777777777'},
    { id: 7, completed: false, text: '8888888888888888888888888'},
    { id: 8, completed: false, text: '9999999999999'},
    { id: 9, completed: false, text: 'aaaaaaaaaaaaaaaaaaaaaaaaa'},
    { id: 10, completed: false, text: 'bbbbbbbbbbbbbbbbbbbbbb'},
    { id: 11, completed: false, text: 'cccccccccccccccccccccccccccccccccccc'},
    { id: 12, completed: false, text: 'dddddddddddddddddddd'},
]

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
        case ACTION_TYPE.TODO.UPDATE:
            return todos.map((todo) => {
                return todo.id === action.id ?
                    Object.assign({}, todo, {
                        text: action.text
                    }) : todo
            })
        case ACTION_TYPE.TODO.GET_PAGE_DATA:
            return
        default:
            return todos
    }
}

export default todoReducer





// const fetchPosts =
//   (dispatch, postTitle) => new Promise(function (resolve, reject) {
//      dispatch(requestPosts(postTitle));
//      return fetch(`/some/API/${postTitle}.json`)
//                .then(response => {
//                      type: 'FETCH_POSTS',
//                      payload: response.json()
//                });
//   });
