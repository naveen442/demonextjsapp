import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <div>
      <Navbar bg="dark"  expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-white">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ms-auto ">
          
            <Nav.Link href="/Home"  className="text-white">Home</Nav.Link>
            <Nav.Link href="/About" className="text-white">About</Nav.Link>
            <Nav.Link href="/Service" className="text-white">Service</Nav.Link>
            <Nav.Link href="/Contact" className="text-white">contect us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
