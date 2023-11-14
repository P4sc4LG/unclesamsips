import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import UserIcon from '@/assets/icons/user_icon.png';

const ProfileDropdown = () => {
    return (
        <NavDropdown title={<img src={UserIcon} alt="User" style={{ width: 30, height: 30 }} />} id="nav-dropdown" drop="down">
            <NavDropdown.Item as={Link} to="/admin/dashboard">
                Administration
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/dashboard">
                Se déconnecter
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default ProfileDropdown;