//统一管理 action type

const ACTION_TYPE = {
    TODO: {
        ADD: 'ADD_TODO',
        DELETE: 'DELETE_TODO',
        UPDATE: 'UPDATE_TODO',
        COMPLETE: 'COMPLETE_TODO',
        SELECT: 'SELECT_ALL_TODOS'
    },
    USER: {
        CREATE: 'CREATE_USER'
    },
    COMMON: {
        FETCH_LOADING: 'FETCH_LOADING',
        FETCH_SUCCEEDED: 'FETCH_SUCCEEDED',
        FETCH_FAILED: 'FETCH_FAILED'
    },
};


export default ACTION_TYPE
