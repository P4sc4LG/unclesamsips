import React from 'react';
import logo from '../../assets/logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';
import Toggle from '../Toggle/Toggle';
import UserIcon from '../../assets/icons/user_icon.png';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        {/* TODO transformer en component */}
        <img style={{ width: 250,marginRight: '5em'}} src={logo} alt="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="text-decoration-none col px-md-3"><Nav.Item><Label content={"Accueil"} color={"rgba(252, 249, 69, 0.8)"}/></Nav.Item></Link>
            <Link to='/exemple' className="text-decoration-none col px-md-3" ><Nav.Item><Label content={"Ingrédient"} color={"rgba(252, 249, 69, 0.8)"}/></Nav.Item></Link>
            <Link to='/exemple' className="text-decoration-none col px-md-3" ><Nav.Item><Label content={"Cock'Random"} color={"rgba(252, 249, 69, 0.8)"}/></Nav.Item></Link>
            <Link to='/Accueil' className="text-decoration-none col px-md-3" ><Nav.Item><Label content={"Autre1"} color={"rgba(252, 249, 69, 0.8)"}/></Nav.Item></Link>
            
            <Link to='/exemple' className="text-decoration-none col px-md-3" ><Nav.Item><Label content={"Autre2"} color={"rgba(252, 249, 69, 0.8)"}/></Nav.Item></Link>
            <Link to='/exemple' className="text-decoration-none col px-md-3" ><Nav.Item><Label content={"Autre3"} color={"rgba(252, 249, 69, 0.8)"}/></Nav.Item></Link>
          </Nav>
          <Nav className="ms-auto">
              <Nav.Item style={{ paddingTop:'0.3em'}}><Toggle/></Nav.Item>
              <Link to='/' ><Nav.Item style={{ marginLeft:'1.5em'}}><img src={ UserIcon } alt="User" style={{ width:30, height:30 }}/></Nav.Item></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;