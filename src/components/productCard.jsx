import React, { Component } from 'react';
import Like from './common/like';

class ProductCard extends Component {

    render() {
        const { title, partNumber, price, currency, onLike, part } = this.props;
        return (
            <React.Fragment>
                <div className="card">
                    <div className="productImageBox">
                        <img src="..." alt="" />
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
                            <Like liked={part.liked} onClick={() => onLike(part)} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductCard;
