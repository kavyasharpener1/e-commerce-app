import React from 'react';
const Quantity = props => {
    return (
        <form style={{ width: '50px' }} onSubmit={props.onChnage} >
            <input type='number' />
        </form>

    )
}
export default Quantity;