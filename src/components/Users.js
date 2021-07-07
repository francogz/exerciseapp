import React from 'react';

//Redux 
import { useDispatch } from 'react-redux';
import { deleteUserAction } from '../actions/userActions';
const Users = ({user}) => {
    const {name, email, country, id} = user;

    const dispatch = useDispatch();

    // Confirm delete user
    const confirmDeleteUser = id => {
        
        dispatch(deleteUserAction(id));
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{country}</td>
            <td className="acciones">
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteUser(id)}
                >Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Users;