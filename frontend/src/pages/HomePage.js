import React from 'react';
import Front from '../components/Front';
import Navigation from '../components/Navigation';
import Product from '../components/Product';


const HomePage = () => 
{
    return(
        <div id='home' className="pageExtended">
            <Navigation id="frontnav"/>
            <Front />
            <Product />
        </div>
    );
}

export default HomePage;