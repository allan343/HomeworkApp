import React from 'react';



export default function ClassDetails(props) {

 
  return (
  
      <div className='SchoolClassItem__row'>
    { <h3> {props.className}</h3>}
  { <h3> Started {props.startDate}</h3>}
  { <h3> Ends {props.endDate}</h3>}
    { <h3> Location {props.building}</h3>}  
    { <h3> Teacher {props.tuilding}</h3>}  
    { <h3> ClassTimes {props.tuilding}</h3>}  
    

     
      </div>
    
   
    
  )
}

