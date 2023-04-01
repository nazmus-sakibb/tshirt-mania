import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item!</p>;
    }
    else if(cart.length === 1){
        message = <div>
            <h3>Amar jonno ekta neo</h3>
            <p>Tomar jonno ekta neo</p>
            <p><small>tar jonno ekta neo</small></p>
        </div>
    }
    else {
        message = <p>Thanks for buying</p>;
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>3 jon k gift diba?</p> : <p>buy more or less</p>}
            <p>&& operator</p>
            {
                cart.length === 2 && <h2>Double Items</h2>
            }
        </div>
    );
};

export default Cart;


/* 

*/