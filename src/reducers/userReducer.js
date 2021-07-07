import {
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    START_DOWNLOAD_USERS,
    DOWNLOAD_USERS_SUCCESS,
    DOWNLOAD_USERS_ERROR,
    GET_USER_DELETE,
    USER_DELETE_SUCCESS,
    USER_DELETE_ERROR
} from '../types';

const initialState = {
    users: [],
    error: null,
    loading: false,
    userdelete: null
}

export default function( state = initialState, action) {
    switch(action.type) {

        case ADD_USER:
        case START_DOWNLOAD_USERS: 
            return {
                ...state,
                loading: action.payload
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            }
        case ADD_USER_ERROR:
        case DOWNLOAD_USERS_ERROR:
        case USER_DELETE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload
            }
        case GET_USER_DELETE:
            return {
                ...state,
                userdelete: action.payload
            }
        case USER_DELETE_SUCCESS:
            return {
                ...state,
                users: state.users.filter( user => user.id !== state.userdelete ),
                userdelete: null
            }
        default: 
            return state;
    }
}