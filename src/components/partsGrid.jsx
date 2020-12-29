import React from 'react';

import ProductCard from './productCard';

const PartsGrid = ({ parts, onLike, currency }) => {

    return (
        <div>
            <div className="gridContainer" >
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
        </div>
    );
}


export default PartsGrid;