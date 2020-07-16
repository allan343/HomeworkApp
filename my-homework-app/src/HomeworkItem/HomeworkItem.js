import React from 'react';



export default function HomeworkItem(props) {
  let schoolItem= props
  console.log("props "+ schoolItem.className);

  return (
        <div className='HomeworkItem__row'>
    { <h3> {props.description}</h3>}

     
      </div>
    
   
    
  )
}

