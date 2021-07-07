import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUserAction } from '../actions/userActions';

const NewUser = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail] = useState('');
    const [ country, setCountry] = useState(''); 

    const dispatch = useDispatch();

    const loading = useSelector( state => state.users.loading);
    const error = useSelector( state => state.users.error);
    const addUser = user => dispatch( addNewUserAction(user) )

    const submitNewUser = e => {
        e.preventDefault();

        // Validation
        if(name.trim() ===  '' || email.trim() === '' || country.trim() === ''){
            alert('todos los campos son obligatorios')
            return
        }
        // If there are no errors
            alert('Usuario creado correctamente')
            window.location.href= "/";
        // Create the new user
        addUser({
            name,
            email,
            country
        });
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Crear Usuario</h2>

                        <form
                            onSubmit={submitNewUser}
                        >
                            <div className="form-group">
                                <label>Nombre:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Tu Nombre"
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Correo:</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="Tu Correo"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Nacionalidad:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Tu Nacionalidad"
                                    name="country"
                                    value={country}
                                    onChange={e => setCountry(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            > Crear Usuario</button>
                        </form>
                        { loading ? <p>Cargando...</p> : null}
                        { error ? <p className="alert alert-danger  p2 text-center mt-3">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewUser;