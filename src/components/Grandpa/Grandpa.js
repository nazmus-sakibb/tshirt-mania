import React, { createContext } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const HouseContext = createContext('10 ta house');

const Grandpa = () => {
    const house = 7;
    return (
        <HouseContext.Provider value='Dadu house'>
            <div className='grandpa'>
                <h2>Grandpa</h2>

                <section className='flex'>
                    <Father house={house} />
                    <Uncle house={house} />
                    <Aunty house={house} />
                </section>
            </div>
        </HouseContext.Provider>
    );
};

export default Grandpa;