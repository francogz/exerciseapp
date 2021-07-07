import React, { useEffect } from 'react';
import Users from './Users';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../actions/userActions';

const User = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // Consult API
        const loadUsers = () => dispatch( getUsersAction() );
        loadUsers();
    },[]);

    // Get the state
    const users = useSelector( state => state.users.users );
    const error = useSelector( state => state.users.error );
    const loading = useSelector( state => state.users.loading );
    return ( 
        <>
            <h2 className="text-center my-5">Listado de Usuarios</h2>

            {error ? <p className="font-weight-bold alert alert-danger text-center mt-3">Hubo un error</p> : null }
            {loading ? <p className="text-center">Cargando...</p> : null}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                     <tr>
                         <th scope="col">Nombre</th>
                         <th scope="col">Correo</th>
                         <th scope="col">Pais</th>
                         <th scope="col">Acciones</th>
                     </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? 'No hay usuarios' : (
                        users.map( user => (
                            <Users
                                key={user.id}
                                user={user}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
     );
}
 
export default User;