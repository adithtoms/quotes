import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Bookmarks from './Bookmarks'
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href='/'>Quotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href='/bookmarks'><Bookmarks/></Nav.Link>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
    </>
  )
}

export default Header