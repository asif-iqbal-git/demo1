import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
/*
By Using single useState hook
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount,
        enteredDate
    });
*/
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /*
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value
        })*/
        /*
        setUserInput((prevState)=>{
            return {...prevState, enteredTitle:event.target.value}
        })
        */
    };

    const amountChangeHanler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
      
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }
        console.log("ExpenseForm.js", expenseData);
        //require for reset form.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        //recives value from NewExpense.js        
        props.onSaveExpenseData();
    }

    return(
        <form onSubmit={submitHandler}>
            <div className = "new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label> 
                    <input 
                        type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}/> 
                 </div>
                <div className="new-expense__control">
                    <label>Amount</label> 
                    <input 
                         type="number" 
                         step="0.01" 
                         min="0.01" 
                         value={enteredAmount}
                         onChange={amountChangeHanler} />
                </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input 
                            type="date"  
                            min="2019-01-01"  
                            max="2022-12-31" 
                            value={enteredDate}
                            onChange={dateChangeHandler}/>
                    </div>
              
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )
}

export default ExpenseForm;