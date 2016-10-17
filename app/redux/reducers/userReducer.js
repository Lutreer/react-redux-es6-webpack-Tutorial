import ACTION_TYPE from '../common/const_action_type.js'

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