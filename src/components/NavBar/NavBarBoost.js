import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import './NavBarBoost.css';
import CartWidget from './CartWidget';

function NavBarBoost() {
  const categories = ["technology", "clothes", "kitchen"];

  return (
    <Navbar className='navbar' expand="lg" variant='dark'>
      <Container>
        <Link to={'/'}><Navbar.Brand>GeniuStore</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
            {categories.map((cat) => {
                return <NavDropdown.Item><Link to={`/category/${cat}`}>{cat}</Link></NavDropdown.Item>
              })}
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarBoost