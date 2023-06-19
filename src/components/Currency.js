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
                <option value="£">£ (Pound)</option>
                <option value="$">$ (Dollar)</option>
                <option value="€">€ (Euro)</option>
                <option value="₹">₹ (Rupee)</option>
            </select>
            </label>
        </div>
    )
}

export default Currency;