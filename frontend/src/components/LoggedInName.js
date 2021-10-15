import React from 'react';

function LoggedInName()
{

    var user = {}

    const doLogout = event =>
    {
        event.preventDefault();

        alert('doLogout');
        window.location.href = "/";
    };
    
    return(
    <div id="loggedInDiv">
        <span id="userName">Logged In As John Doe </span><br />
        <button type="button" id="logoutButton"
        onClick={doLogout}> Log Out </button>
    </div>
    );
};

export default LoggedInName;
