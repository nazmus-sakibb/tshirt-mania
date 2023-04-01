import React from 'react';

const Tshirt = ({ tshirt }) => {
    const { name, picture } = tshirt;
    return (
        <div>
            <img src={picture} alt="" />
            <p>Name: {name}</p>
        </div>
    );
};

export default Tshirt;