import React, { Component } from 'react';
import Like from './common/like';

import { Card, Button } from 'react-bootstrap';

class ProductCard extends Component {

    render() {
        const { title, partNumber, price, currency, onLike, part } = this.props;
        return (
            // <Card className="productCard">
            //     <Card.Img variant="top" src="https://picsum.photos/200" />
            //     <Card.Body>
            //         <Card.Title>{title}</Card.Title>
            //         <Card.Text>
            //             Part Number: {partNumber} {<br />}
            //             Price: {price} {currency}
            //         </Card.Text>
            //         <Button variant="primary">Add To Cart</Button>
            //         <Like liked={part.liked} onClick={() => onLike(part)} />
            //     </Card.Body>
            // </Card>
            <React.Fragment>
                <div className="card">
                    <div className="productImageBox">
                        <img src="..." alt="Product Image" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">
                            Card description goes here in p tag
                            Part Number: {partNumber} {<br />}
                            Price: {price} {currency}
                        </p>
                        <div className="card-footer">
                            <button className="btn btn-primary btn-sm">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductCard;
