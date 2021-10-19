import React from 'react';
import Navigation from '../components/Navigation';
import Product from '../components/Product';


const ProductPage = () => 
{
    return(
        <div id='home' className="Page">
            <Navigation id="landingnav"/>
            <Product />
        </div>
    );
}

export default ProductPage;