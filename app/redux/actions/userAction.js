import ACTION_TYPE from '../common/action_type/constActionType'

let actions = {
    createNewUser: function(text){
        return {
            type: ACTION_TYPE.USER.CREATE,
            userName:text
        }
    }
}

export default actions
