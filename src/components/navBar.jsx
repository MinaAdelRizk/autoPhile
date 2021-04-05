import React from 'react';

import CarSelectModal from "./carSelectModal"

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import auth from '../services/authService';

const NavBar = ({ selectedCar, user }) => {

    let carSelectButtonValue;
    selectedCar === null ? carSelectButtonValue = "Select" : carSelectButtonValue = "Change";

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home">AutoPhile</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/spare-parts">Spare Parts</Nav.Link>
                    <Nav.Link href="/maintenance">Maintainance</Nav.Link>
                    <NavDropdown title="Accessories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/tires">Tyres</NavDropdown.Item>
                        <NavDropdown.Item href="/batteries">Batteries</NavDropdown.Item>
                        <NavDropdown.Item href="/fluids">Fluids</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="request-service-quotation">Request Service Quotation</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                {selectedCar && <p className="selected-car-holder">{selectedCar}</p>}
                <Nav>

                    <CarSelectModal btnName={carSelectButtonValue} selectedCar={selectedCar} />

                </Nav>

                {!user && (
                    <Nav>
                        <Nav.Link href="/login">Login </Nav.Link>
                        <Nav.Link href="/register">Register </Nav.Link>
                    </Nav>
                )}
                {user &&
                    <Nav>
                        <Nav.Link href="/profile">{user.name}</Nav.Link>
                        <Nav.Link href="/" onClick={auth.logout}> Log Out </Nav.Link>
                    </Nav>
                }

            </Navbar.Collapse>
        </Navbar >
    );
}


export default NavBar;