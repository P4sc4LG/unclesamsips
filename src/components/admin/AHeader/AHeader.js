import React from 'react';
import { accountService } from '@/_services/account.service';
import { useNavigate } from 'react-router-dom';

const AHeader = () => {

    let navigate = useNavigate();

    const logout = () => {
        accountService.logout()
        navigate('/')
    }

    return (
        <div className="AHeader">
            Administration Zone
        </div>
    );
};

export default AHeader;