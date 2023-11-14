import React from 'react';
import { Outlet } from 'react-router-dom';

import './admin.css'

import { AHeader, SideMenu } from '@/components/'

const ALayout = () => {
    return (
        <div className='Layout'>
            <AHeader />
            <div id="admin">
                <SideMenu />
                <div id="admin_body">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ALayout;