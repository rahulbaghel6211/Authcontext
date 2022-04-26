import { useContext } from 'react';

import { CartContext } from '../../contexts/cartcontext';

export const Body=()=>{
    const{handleChange}=useContext(CartContext);
    return <div style={{
        width:"200px",
        height:"300px",
        padding:"10px",
        background:"teal",
    }}>
        <button onClick={()=>{
            handleChange(1);
        }} >Add to Cart</button>

    </div>
}