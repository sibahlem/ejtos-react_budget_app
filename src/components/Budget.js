/*In Budget.js you will be adding text and value for your budget. You will be importing app context and the useContext hook, and pass your AppContext to it - 
    this is how a component connects to the context in order to get values from global state.*/

// to-do: trigger an alert msg when budget input goes beyond max of 20 000 (commented lines 21-23 id where we left off)    

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const changeBudget = (val)=>{
        const totalExpenses = expenses.reduce((total, item) => {
            return (total +- item.cost);
        }, 0);

        if(val<totalExpenses) {
            alert("You cannot reduce the budget that is already allocated!");
        } 

        // else if(val>20000) {
        //     alert("Budget limit of ${currency}20 000 is reached!")
        // }

        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }


	return (
		<div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
			<input type="number" step="10" max='20000' style={{width:'80px'}}  value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
            
		</div>
	);
};

export default Budget;

/*Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.*/
