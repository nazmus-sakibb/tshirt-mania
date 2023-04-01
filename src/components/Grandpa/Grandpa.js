import React from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>

            <section className='flex'>
                <Father house={house}/> 
                <Uncle house={house}/> 
                <Aunty house={house}/> 
            </section>
        </div>
    );
};

export default Grandpa;