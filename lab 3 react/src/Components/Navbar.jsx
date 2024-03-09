import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand text-light">Navbar</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
                            <li className="nav-item" key="add-product">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/add-product">Add_Product</NavLink>
                            </li>
                            <li className="nav-item" key="products">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/products">Products</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
