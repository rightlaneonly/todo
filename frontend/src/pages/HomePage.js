import React from 'react';
import Navigation from '../components/Navigation';
import Front from '../components/Front';

const HomePage = () => 
{
    return(
        <div id='home' className="Page">
            <Navigation />
            <Front />
        </div>
    );
}

export default HomePage;