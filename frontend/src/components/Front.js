import React from 'react';
import whiteBG from '../cool-background.png';
import Navigation from '../components/Navigation';

const Front = () => 
{
    return(
        <div id="front">
            <Navigation id="frontnav"/>
            
            <div id="homeText">
                    <h1 id="tagline1" className="tagline">Organize Yourself </h1>
                    <h1 id="tagline2" className="tagline">Better.</h1>
                <h4 id="desc">Set up your schedule, personal reminders, and even customize your calendar; quick and easy.</h4>
            </div>
            <img id="whiteBG" src={whiteBG} alt="background"/>
        </div>
    );
}

export default Front;