import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>ExerciseApp Intelifaz</h1>

                <Link
                    to={"/user/new"}
                    className="btn btn-danger new-post d-block d-md-inline-block"
                >Crear Usuario &#43;</Link>
                <Link
                    to={"/"}
                    className="btn btn-danger new-post d-block d-md-inline-block"
                >Listar Usuarios &darr;</Link>
            </div>
        </nav>
     );
}
 
export default Header;