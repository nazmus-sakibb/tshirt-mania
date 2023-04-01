import React, { useContext } from 'react';
import { HouseContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(HouseContext);
    return (
        <div>
            <h4>Friend</h4>
            <p><small>House: {house}</small></p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;