import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './Components/Products';
import StandardErrorBoundary from './Components/StandardErrorBoundary/StandardErrorBoundary';
import Navbar from './Components/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { useState } from 'react';
import EditProduct from './Components/EditProduct';
import ProductInfo from './Components/ProductInfo';
import { PostsContextProvider } from './Components/Posts/PostsContext';
import Posts from './Components/Posts/Posts';

function App() {
  const [showNav, setShowNav] = useState(true);
  return (
    <div className="App">
      <StandardErrorBoundary>
        <BrowserRouter>
          {showNav && <Navbar /> }
          <div className="container">
            <Routes>
              {
                ['products', '/','home'].map((path, index) => <Route path={path} key={index} element={<Products />} />)
              }
              
              <Route exact path="/add-product" element={<AddProduct />}/>
              <Route path='/products/edit/:id' element={<EditProduct />} />
              <Route path='/products/:id' element={<ProductInfo />} />

              
                <Route path="/posts" element={<PostsContextProvider><Posts /></PostsContextProvider>} />
              

              <Route path="*" element={<ErrorPage funcNav={setShowNav}/>} />

               

            </Routes>
          </div>
        </BrowserRouter>
      </StandardErrorBoundary>
    </div>
  );
}

export default App;
