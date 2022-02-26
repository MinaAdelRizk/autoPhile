import React, { Component } from 'react';
import Like from './common/like';
import Delete from './common/delete'

import * as configFile from '../config.json'
const { apiUrl } = configFile
const imagesSource = apiUrl + "/files/image/"

class ProductCard extends Component {

    render() {
        const { onLike, onDelete, item: i, user } = this.props;

        return (
            <React.Fragment>
                <div className="card">
                    <div className="productImageBox">
                        <img src={imagesSource + `${i.productImage}`} alt="" />
                    </div>

                    <div className="card-body">
                        <h6 className="card-title">
                            {i.title}
                        </h6>
                        <ul className="card-text">
                            {/* Parts Related */}
                            {i.partNumber && <li>Part Number: {i.partNumber}</li>}
                            {/* Fluids Related */}
                            {i.vsc && <li>Viscosity: {i.vsc}</li>}
                            {i.type && <li>Type: {i.type.name}</li>}
                            {/* {i.volume && <li>Volume: {i.volume}</li>} */}
                            {i.mnf && <li>Manufacturer: {i.mnf.name}</li>}
                            {/* tires related */}
                            {i.year && <li>Year: {i.year}</li>}
                            {/*General*/}
                            {/* {i.seller && <li>Seller: {i.seller.name}</li>} {i.seller ? <li> Seller Rating: {i.seller.rating}</li> : ""} */}
                            {/* {i.category && <li>Category: {i.category.name}</li>} */}
                        </ul>

                        <div className="card-footer">
                            <button className="btn btn-primary btn-sm">Add To
                                <i className="fa fa-cart-plus m-1" aria-hidden="true"></i>
                            </button>

                            <Like liked={i.liked} onClick={() => onLike(i)} />
                            {user && user.isAdmin ? <Delete onClick={() => onDelete(i)} /> : null}
                            {<span>{i.price} AED</span>}




                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default ProductCard;
