import React, { Component } from 'react';
import Like from './common/like';

import { Card, Button } from 'react-bootstrap';

class ProductCard extends Component {

    render() {
        const { title, partNumber, price, currency, onLike, part } = this.props;
        return (
            <Card style={{ width: '18rem', border: 'none', margin: "0px 10px auto" }}>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Part Number: {partNumber} {<br />}
                        Price: {price} {currency}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                    <Like liked={part.liked} onClick={() => onLike(part)} />
                </Card.Body>
            </Card>
        );
    }
}

export default ProductCard;
