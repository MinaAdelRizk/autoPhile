import React, { Component } from 'react';
import Like from './common/like';
import Delete from './common/delete'
class ProductCard extends Component {

    render() {
        const { onLike, onDelete, item: i, user } = this.props;

        return (
            <React.Fragment>
                <div className="card">
                    <div className="productImageBox">
                        <img src="..." alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {i.title}
                        </h5>
                        <ul className="card-text">
                            {i.mnf && <li>Manufacturer: {i.mnf}</li>}
                            {/* Parts Related */}
                            {i.partNumber && <li>Part Number: {i.partNumber}</li>}
                            {/* Fluids Related */}
                            {i.vsc && <li>Viscosity: {i.vsc}</li>}
                            {i.type && <li>Type: {i.type}</li>}
                            {i.volume && <li>Volume: {i.volume}</li>}
                            {/* tires related */}
                            {i.width && <li>W: P{i.width} mm H: {i.height}</li>}
                            {i.rim && <li>Rim Diamiter: R{i.rim}</li>}
                            {i.y && <li>Year: {i.y}</li>}
                            {/*General*/}
                            {i.seller && <li>Seller: {i.seller.name}</li>} {i.seller ? <li> Seller Rating: {i.seller.rating}</li> : ""}
                            {i.category && <li>Category: {i.category.name}</li>}
                        </ul>
                        <div className="card-footer">
                            <button className="btn btn-primary btn-sm">Add To
                                <i className="fa fa-cart-plus m-1" aria-hidden="true"></i>
                            </button>

                            {<span>Price: {i.price}</span>}
                            {user && user.isAdmin ? < Delete onClick={() => onDelete(i)} /> : null}
                            <Like liked={i.liked} onClick={() => onLike(i)} />
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default ProductCard;
