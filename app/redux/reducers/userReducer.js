import ACTION_TYPE from '../common/constActionType'

let userReducer = function(user = {}, action) {
    switch (action.type) {
        case ACTION_TYPE.USER.CREATE:
            return {
                username: action.userName,
                id: Math.round(Math.random() * 100)
            }
        default:
            return user;
    }
}

export default userReducer
