// import React,{ useState } from 'react';
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card  from '../UI/Card';

import './ExpenseItem.css';
import './ExpenseDate.css';

function ExpenseItem(props) {
    /*
    const expenseDate = new Date(2022, 8, 1);
    const expenseTitle = 'car insurance';
    const expenseAmount = 200.90;
    */
   //console.log(props)
  /*
   console.log('ExpenseItem evaluated by React');
   using state hook shows two way binding
   const [title, setTitle] = useState(props.title);
   const clickHandler = () =>{
        setTitle('Update');
        console.log(title);
    }
   */ 
//   console.log(props.date);
    return (
        <Card className='expense-item'>
            {/* <div>{ props.date.toISOString() }</div> */}
          <ExpenseDate date = {props.date} />
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${ props.amount }</div>
                {/* <button onClick={clickHandler} >Change Title</button> */}
            </div>
        </Card>
    );
}

export default ExpenseItem;