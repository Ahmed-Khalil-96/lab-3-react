import { useEffect, useState } from "react";
import Product from "./Product";
import React from 'react';
import useFetch from "./useFetch";
import axios from "axios";



function Products () {
    let [products, getProducts] = useFetch("http://localhost:2000/products");
    
    useEffect(() => {   
        getProducts();
    }, []);

    let deleteProduct = (productId) => {
        axios.delete(`http://localhost:2000/products/${productId}`)
        .then((res) => {console.log(res);})
        .catch(err => console.log(err));
        getProducts();
    }

    return ( 
        <div className="row">
            {   products.map((product) => {
                    return <Product key={product.id} product={product} deleteProduct={deleteProduct} />
                }
            )}
        </div>
     );
}

export default Products ;