import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const HouseContext = createContext('10 ta house');
export const MoneyContext = createContext(345);

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(345);

    return (
        <HouseContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>

                    <section className='flex'>
                        <Father house={house} />
                        <Uncle house={house} />
                        <Aunty house={house} />
                    </section>
                </div>
            </MoneyContext.Provider>
        </HouseContext.Provider>
    );
};

export default Grandpa;