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
import clientAxios from '../config/axios';

export function addNewUserAction(user) {
    return async (dispatch) => {
        dispatch( userAdd() );

        try {
            // Insert in API
            await clientAxios.post('/user', user);
            dispatch( addUserSucces(user) )
        } catch (error) {
            console.log(error)
            dispatch( addUserError(true) );
        }
    }
}

const userAdd = () => ({
    type: ADD_USER,
    payload: true
});

// USER OKEY
const addUserSucces = user => ({
    type: ADD_USER_SUCCESS,
    payload: user
})

// USER ERROR
const addUserError = status => ({
    type: ADD_USER_ERROR,
    payload: status
})


// Function Download Users
export function getUsersAction() {
    return async (dispatch) => {
        dispatch( downloadUsers() );

        try {
            const request = await clientAxios.get('/user');
            dispatch( downloadUsersSuccess(request.data) )
        } catch (error) {
            dispatch( downloadUsersError())
        }
    }
}

const downloadUsers = () => ({
    type: START_DOWNLOAD_USERS,
    payload: true
});

const downloadUsersSuccess = users => ({
    type: DOWNLOAD_USERS_SUCCESS,
    payload: users
});

const downloadUsersError = () => ({
    type: DOWNLOAD_USERS_ERROR,
    payload: true
});

// Select and delete user
export function deleteUserAction(id) {
    return async (dispatch) => {
        dispatch(getUserDelete(id) );

        try {
            await clientAxios.delete(`/user/${id}`);
            dispatch( deleteUserSuccess() );
        } catch (error) {
            dispatch( deleteUserError());
        }
    }
}

const getUserDelete = id => ({
    type: GET_USER_DELETE,
    payload: id
});

const deleteUserSuccess = () => ({
    type: USER_DELETE_SUCCESS
})

const deleteUserError = () => ({
    type: USER_DELETE_ERROR,
    payload: true
})