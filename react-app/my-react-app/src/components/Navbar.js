import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as RBNavbar, Container, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

export default function Navbar(props) {
  return (
    <RBNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <RBNavbar.Brand href="/">{props.title}</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="./components/About.js">About</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Something else</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button type="button" class="btn btn-primary">Search</Button>
          </Form>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}

Navbar.propTypes = { 
  title: PropTypes.string
};
