import React from 'react';
import './Header.css';

import logo from '@/assets/logo.png';
import UserIcon from '@/assets/icons/user_icon.png';
import { Label, Toggle } from '../../index';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Link to='/'><img style={{ width: 350, marginRight: '5em' }} src={logo} alt="logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="text-decoration-none col px-md-3 yellow-police "><Nav.Item><Label content={"Cocktails"} /></Nav.Item></Link>
            <Link to='/ingredients' className="text-decoration-none col px-md-3 yellow-police" ><Nav.Item><Label content={"Ingrédients"} /></Nav.Item></Link>
            <Link to='/cocktail/random' className="text-decoration-none col px-md-3 yellow-police" ><Nav.Item><Label content={"Cock'Random"} /></Nav.Item></Link>
          </Nav>
          <Nav className="ms-auto">
            <div className="vr me-4"></div>
            <Nav.Item style={{ paddingTop: '1em' }}><Toggle /></Nav.Item>
            <NavDropdown title={<img src={UserIcon} alt="User" style={{ width: 30, height: 30 }} />} id="nav-dropdown" drop="down">
              <NavDropdown.Item as={Link} to="/admin/dashboard">
                Your Dropdown Item
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;