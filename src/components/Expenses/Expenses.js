import React, { useState } from 'react';

import  ExpenseItem  from './ExpenseItem';
import  ExpensesFilter  from './ExpensesFilter';
import  Card from '../UI/Card';
import './Expenses.css';

 
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };


    return (
        <div>
        
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
            {props.items.map( expenseData => <ExpenseItem 
                title = {expenseData.title}
                amount = {expenseData.amount}
                date = {expenseData.date}
            />)}

          

            
        </Card>
        </div>
    );
}

export default Expenses;