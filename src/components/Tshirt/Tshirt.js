import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt }) => {
    const { name, picture, price, id } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h6>Price: {price}</h6>
            <button>Add to Cart</button>
        </div>
    );
};

export default Tshirt;