import { useState } from "react";
import axios from "axios";


const useFetch = (url) => {
    
    let [products, setProducts] = useState([]);

    let getProducts = () => {
        axios.get(url)
        .then((res) => {
            setProducts(res.data)
        })
        .catch(err => console.log(err)); 
    }

    return [products, getProducts];

}

export default useFetch;