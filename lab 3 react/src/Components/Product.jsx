import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Product({ product, deleteProduct }) {
    const navigate = useNavigate();
    return (
        <div className="card col-4">
            <img className="card-img-top" src={product.imgUrl} alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="row">
                    <p className="col-3">{product.price}$</p>
                </div>
                <div className="row">
                    <p className="col-6">{product.quantity > 0 ? <span>In stock</span> : <span className="text-danger">Out of stock</span>}</p>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => { deleteProduct(product.id) }}>Delete</button>
                <Link className="btn btn-dark btn-sm mx-3" to={`/products/edit/${product.id}`}>Edit</Link>
                <Link className="btn btn-dark btn-sm mx-3" to={`/products/${product.id}`}>Show More</Link>
            </div>
        </div>
    );
}

export default Product;
