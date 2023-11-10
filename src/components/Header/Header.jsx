import React from 'react';
import logo from '../../assets/logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        {/* TODO transformer en component */}
        <img style={{ width: 250,marginRight: '5em'}} src={logo} alt="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="text-decoration-none col px-md-3"><Nav.Link href="#home"><Label content={"Accueil"} color={"Yellow"}/></Nav.Link></Link>
            <Link to='/exemple' className="text-decoration-none col px-md-3" ><Nav.Link href="#home"><Label content={"Ingrédient"} color={"Yellow"}/></Nav.Link></Link>
            <Link to='/exemple' className="text-decoration-none col px-md-3" ><Nav.Link href="#home"><Label content={"Cock'Random"} color={"Yellow"}/></Nav.Link></Link>
            <Link to='/exemple' className="text-decoration-none col px-md-3" ><Nav.Link href="#home"><Label content={"Autre"} color={"Yellow"}/></Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;