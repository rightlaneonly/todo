import React from 'react';
import Front from '../components/Front';
import Navigation from '../components/Navigation';
import Product from '../components/Product';


const HomePage = () => 
{
    return(
        <div id='home' className="Page">
            <Navigation id="frontnav"/>
            <Front />
        </div>
    );
}

export default HomePage;