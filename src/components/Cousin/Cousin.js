import React, { useContext } from 'react';
import { HouseContext } from '../Grandpa/Grandpa';
import Friend from '../Friend/Friend';

const Cousin = () => {
    const house = useContext(HouseContext);
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>House: {house}</small></p>
            <Friend />
        </div>
    );
};

export default Cousin;