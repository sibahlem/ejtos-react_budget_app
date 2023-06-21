/*In Expenseitem.js you will be importing dispatch from Context, which allows you to dispatch a delete action,
    creating a function that gets called when the delete icon is clicked.*/

import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        //alert()
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }



    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='1.5em' color="green" onClick={event=> increaseAllocation(props.name)}></FaPlusCircle></td>
		<td><FaMinusCircle size='1.5em' color="red" onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td>
		<td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}

export default ExpenseItem;

/*Here, you are dispatching an action.
Your action contains the type (so the reducer knows how to update the state) and the payload.
In this case you are passing the ID of this expense (which you get from props when you rendered the ExpenseList).*/
