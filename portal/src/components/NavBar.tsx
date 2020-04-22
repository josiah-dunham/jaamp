import React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import '../lib/styles/NavBar.css'

const NavBar = () => (
    <Navbar className="nav-padding" bg="light" expand="lg">
        <Navbar.Brand href="/">JaAMP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/applicants">My Applicants</Nav.Link>
                <NavDropdown title="My Jobs" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/jobs">View All Jobs</NavDropdown.Item>
                    <NavDropdown.Item href="/job">Add New Job</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Navbar.Text>
                Signed in as: <a href="#login">Josiah Dunham</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar