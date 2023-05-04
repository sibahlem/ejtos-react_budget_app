In Budget.js you will be adding text and value for your budget. You will be importing app context and the useContext hook, and pass your AppContext to it - 
    this is how a component connects to the context in order to get values from global state.

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};

export default Budget;
