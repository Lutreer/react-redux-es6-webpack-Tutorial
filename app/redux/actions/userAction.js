import ACTION_TYPE from '../common/const_action_type'

let actions = {
    createNewUser: function(text){
        return {
            type: 'CREATE_USER_ID',
            id: Math.round(Math.random() * 100)
        }
    }
}

export default actions
