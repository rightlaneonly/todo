import React from 'react'
import Form from 'react-bootstrap/Form'

function SignUp()
{
    return(
          <div id="signUpDiv" className="App">
            <Form id="signUpForm">
                <text id="inner-title">Sign up and create a new account</text><br/><br />
                <input type="text" id="firstName" className="inFields" placeholder="First Name" /><br/>
                <input type="text" id="lastName" className="inFields" placeholder="Last Name" /><br/>
                <input type="text" id="email" className="inFields" placeholder="Email" /><br/>
                <input type="text" id="userName" className="inFields" placeholder="Username" /><br/>
                <input type="password" id="password" className="inFields" placeholder="Password" /><br/>
                <input type="submit" id="signUpButton" value = "Do It"/>
                <span id="signUpResult"></span>
            </Form>
         </div>
    );
};

export default SignUp;