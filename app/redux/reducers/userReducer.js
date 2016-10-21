import ACTION_TYPE from '../common/constActionType'

let userReducer = function(user = {}, action) {
    switch (action.type) {
        case ACTION_TYPE.USER.CREATE_ID:
            return {
                username: user.username,
                id: action.id
            }
        default:
            return user;
    }
}

export default userReducer
