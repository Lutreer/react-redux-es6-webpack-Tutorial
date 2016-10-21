import ACTION_TYPE from '../common/constActionType'

let actions = {
    createNewUser: function(text){
        return {
            type: 'CREATE_USER_ID',
            id: Math.round(Math.random() * 100)
        }
    }
}

export default actions
