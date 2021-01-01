import React from 'react';

import ProductCard from './productCard';

const PartsGrid = ({ parts, onLike, currency }) => {

    return (
        <div className="card-columns" >
            {parts.map(part => <ProductCard
                key={part._id}
                title={part.title}
                partNumber={part.partNumber}
                price={part.price}
                currency={currency}
                part={part}
                onLike={onLike}
            />)}
        </div >
    );
}


export default PartsGrid;