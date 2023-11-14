import React from 'react';
import { Link } from 'react-router-dom'

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li>&nbsp;</li>
                <li><Link to='/admin/dashboard'>Dashboard</Link></li>
            </ul>
        </div>
    );
};

export default SideMenu;