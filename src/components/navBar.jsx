import React, { Component } from 'react';

import CarSelectModal from "./carSelectModal"

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class NavBar extends Component {

    render() {
        return (
            <Navbar style={{ marginBottom: 30 }} collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                    <Nav>

                        <CarSelectModal />

                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login </Nav.Link>
                        <Nav.Link href="/register">Register </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}

export default NavBar;