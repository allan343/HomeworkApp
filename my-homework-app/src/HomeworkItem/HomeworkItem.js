import React from 'react';



export default function HomeworkItem(props) {
  let homeworkItem= props
  console.log("props "+ homeworkItem.description);

  return (
        <div className='HomeworkItem__row'>
    { <h3> {props.description}</h3>}

     
      </div>
    
   
    
  )
}