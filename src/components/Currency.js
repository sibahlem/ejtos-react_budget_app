import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    
    const changeCurrency = (val)=>{
        dispatch({
            type:'CHG_CURRENCY',
            payload: val
        })
    }
    
    return (
        <div className='alert alert-secondary' style={{backgroundColor:'#93e499'}}>
            <label style={{marginLeft: '1rem' , backgroundColor:'#93e499', color:'white'}} > Currency:
            <select name= "currency" id="currency" style={{backgroundColor:'#93e499', color:'white', border: 'none'}} onChange={(event)=> changeCurrency(event.target.value)}>
                <option value="£" style={{color:'black'}}>£ (Pound)</option>
                <option value="$" style={{color:'black'}}>$ (Dollar)</option>
                <option value="€" style={{color:'black'}}>€ (Euro)</option>
                <option value="₹" style={{color:'black'}}>₹ (Rupee)</option>
            </select>
            </label>
        </div>
    )
}

export default Currency;