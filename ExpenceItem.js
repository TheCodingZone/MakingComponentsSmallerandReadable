import React from 'react'
import './ExpenceItem.css'
import ExpenceDate from './ExpenceDate';
import ExpenceDetails from './ExpenceDetails';

export default function ExpenceItem(props) {
 
  return (
    <div className="expense-item">
     <ExpenceDate date={props.date}></ExpenceDate>
     <ExpenceDetails expenseDetail={props.expenseDetail} expensePrice={props.expensePrice}/>
    </div>
  )
}
