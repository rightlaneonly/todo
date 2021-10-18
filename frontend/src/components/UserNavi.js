import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//user Navigation
function UserNavi()
{
    return(
        <div id='navi'>
            <Navbar variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href='/'>ToDo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/'>New &#43;</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button href="/login" className="navBtn">Log Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default UserNavi;