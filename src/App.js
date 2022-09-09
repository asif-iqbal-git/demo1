import React, { useState } from 'react';
 
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const  DUMMY_EXPENSES = [
  //  const expenses = [
      {
        id: 1,
        title: 'Product 1',
        amount: 233.44,
        date: new Date(2022, 5, 13)
      },
      {
        id: 2,
        title: 'Product 2',
        amount: 134.33,
        date: new Date(2022, 3, 12)
  
      },
      {
        id: 3,
        title: 'Product 3',
        amount: 533.01,
        date: new Date(2022, 1, 11)
  
      },
      {
        id: 4,
        title: 'Product 4',
        amount: 413.44,
        date: new Date(2022, 5, 19)
  
      },
    ];
    
function App(props) {
 // console.log(props.sample)

 

  /* how jsx convert our template
return React.createElement(
  'div',
  {},

  React.createElement('div',{},"Let's get started"),
  React.createElement(Expenses,{items:expenses})
  );
*/
   
  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  }

  return (
    <div className = "App">
      {/* <h2>Expense Tracker</h2> */}
      <NewExpense  onAddExpense = {addExpenseHandler} />
      <Expenses items ={DUMMY_EXPENSES} />
    </div>
  );
 
}

export default App;
