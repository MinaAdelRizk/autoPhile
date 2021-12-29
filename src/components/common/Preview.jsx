import React from 'react';

export const Preview = ({ images }) => {
    if (!images || images.length === 0) {
        return null
    }
    return images.map(img => <img
        style={{ maxWidth: '200px' }}
        key={img.filename}
        src={'//localhost:3000/' + img.filename} />)
}