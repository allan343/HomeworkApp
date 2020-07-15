import React from 'react';



export default function SchoolClassItem(props) {
  let schoolItem= props
  console.log("props "+ schoolItem.className);

  return (
        <div className='SchoolClassItem__row'>
    { <h3> {props.className}</h3>}
    { <h3> SUN MON TUE WED THUR FRI SAT</h3>}
    { <h3> {props.startTime}</h3>}  { <h3> {props.endTime}</h3>}
     
      </div>
    
   
    
  )
}

