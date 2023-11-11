import React from 'react';
import './header.css';

import logo from '@/assets/logo.png';
import UserIcon from '@/assets/icons/user_icon.png';
import { Label, Toggle } from '../../index';


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
            <Link to='/exemple' className="text-decoration-none col px-md-3 yellow-police" ><Nav.Item><Label content={"Ingrédients"} /></Nav.Item></Link>
            <Link to='/exemple' className="text-decoration-none col px-md-3 yellow-police" ><Nav.Item><Label content={"Cock'Random"} /></Nav.Item></Link>
          </Nav>
          <Nav className="ms-auto">
            <div class="vr me-4"></div>
            <Nav.Item style={{ paddingTop: '0.3em' }}><Toggle /></Nav.Item>
            <Link to='/admin/dashboard' ><Nav.Item style={{ marginLeft: '1.5em' }}><img src={UserIcon} alt="User" style={{ width: 30, height: 30 }} /></Nav.Item></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;