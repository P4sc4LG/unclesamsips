import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Dashboard = () => {
    return (
        <div className='Dasboard mt-4'>
            <Card style={{ maxWidth: '100%' }}>
                <Card.Header>
                    <h2>Panneau d'administration</h2>
                </Card.Header>
            </Card>
        </div>
    );
};

export default Dashboard;