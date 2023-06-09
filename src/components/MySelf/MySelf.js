import React, { useContext } from 'react';
import { HouseContext } from '../Grandpa/Grandpa';

const MySelf = () => {
    const [house, setHouse] = useContext(HouseContext);

    return (
        <div>
            <h2>MySelf</h2>
            <p><small>House: {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default MySelf;