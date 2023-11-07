import React from 'react';

import Card from 'react-bootstrap/Card';

const CardCocktail = ({title, text, img}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardCocktail;