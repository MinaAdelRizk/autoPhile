import React from 'react';

import ProductCard from './productCard';

const PartsGrid = ({ items, ...rest }) => {

    return (
        <div className="card-columns" >
            { items.length < 1 ? "No Results Found" : items.map(item => <ProductCard
                key={item._id}
                item={item}
                {...rest}
            />)}
        </div >
    );
}


export default PartsGrid;