 //https://www.appsloveworld.com/reactjs/100/48/typeerror-cannot-read-properties-of-undefined-reading-tolocalestring
function ExpenseDate(props){

   const month = props && props.date && props.date.toLocaleString('en-us', {month:'long'}) ;
   const day = props  && props.date && props.date.toLocaleString('en-us', {day:'2-digit'});
   const year = props && props.date && props.date.getFullYear();
 console.log(props.date)
    return(
        <div className="expense-date">
        
            <div className="expense-date__year"> { year }  </div>
            <div className="expense-date__month"> { month } </div>
            <div className="expense-date__day"> { day }   </div>
        </div>
    );
}

export default ExpenseDate;