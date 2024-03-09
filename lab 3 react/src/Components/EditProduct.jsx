import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
    const navigate = useNavigate();
    const {id} = useParams();
    let [product,setProduct] = useState({
        name:'',
        price:0,
        quantity:0,
        imgUrl:'https://source.unsplash.com/random'
    });

    // component did mount
    useEffect(() => {   
        getProduct(id);
    }, []);

    let handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setProduct((old) => ({
            ...old,
            [name] :value,
        }));
    }, [product]);

    let getProduct = (productId) => {
        axios.get(`http://localhost:2000/products/${productId}`)
        .then(res => setProduct(res.data))
        .catch();
    }

    let editProduct = (e) => {
        e.preventDefault();

        navigate('/products');
    }

    useEffect(() => {   
        
    }, []);

    return (
        <div>
            <h1>Edit Product {product.id}</h1>
            <form action="" onSubmit={editProduct}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="Name" name="name" value={product.name} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Product Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="Image" name="imgUrl" value={product.imgUrl} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Product Image</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" placeholder="Price" name="price" value={product.price} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Product Price</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" placeholder="Quantity" name="quantity" value={product.quantity} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>

        </div> 
    );
}

export default EditProduct;