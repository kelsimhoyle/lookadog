import React, { useContext, useState } from "react";
import {  AmplifySignOut } from "@aws-amplify/ui-react";
import { UserContext } from "../../Context/UserProvider";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const { user } = useContext(UserContext);
    console.log(user)

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand as={Link} to="/">Looka Dog Walking</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {user ? (
                            <div>
                                <h2>Hello {user.attributes["custom:name"]}!</h2>
                                <AmplifySignOut />
                            </div>
                        ) : (<Link to="/signin">Sign In</Link>)}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>


        </div>
    );

};

export default Header;