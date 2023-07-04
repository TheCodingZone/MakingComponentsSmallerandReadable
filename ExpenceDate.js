import React from 'react'

export default function ExpenceDate(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
  return (
    <div>
       <div className="expense-item__date">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>    
      </div>
    </div>
  )
}
