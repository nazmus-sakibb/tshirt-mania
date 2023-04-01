import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
    return (
        <div>
            <h2>Father</h2>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <MySelf house={house} />
                <Brother house={house} />
                <Sister house={house} />
            </section>
        </div>
    );
};

export default Father;