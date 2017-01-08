import axios from 'axios'

let todoApis = {

    fetchTodosByPage: function (page) {
        axios.get('/getTodos', {
            params: page
        }).then(function (response) {
            return response.data
        }).catch(function (error) {
            return error.data
        })
    }

}


export default todoApis