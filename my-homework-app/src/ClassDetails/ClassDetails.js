import React from 'react';
import ApiContext from '../ApiContext/ApiContext';



export default class ClassDetails extends React.Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
    }
  
  render() {
    console.log(this. props.classId);
  let schoolClass = this.context.getClass(this.props.classId);
  console.log(schoolClass.className);
  return (

      <div className='SchoolClassItem__row'>
    { <h3> {schoolClass.className}</h3>}
  { <h3> Started {schoolClass.startDate}</h3>}
  { <h3> Ends {schoolClass.endDate}</h3>}
    { <h3> Location {schoolClass.building}</h3>}  
    { <h3> Teacher {schoolClass.teacher}</h3>}  
    { <h3> ClassTimes {schoolClass.startTime}</h3>}  
    

     
      </div>
    
   
    
  )
  }
}

