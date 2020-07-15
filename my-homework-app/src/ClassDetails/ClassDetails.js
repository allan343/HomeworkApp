import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink, Link } from 'react-router-dom';



export default class ClassDetails extends React.Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
    }
  
    cancelHandle() {
        //e.preventDefault();
       // this.props.history.goBack();
       this.props.closeClass();
      }
    

  render() {
    console.log(this. props.classId);
  let schoolClass = this.context.getClass(this.props.classId);
  console.log(schoolClass.className);
  return (



      <div className='SchoolClassItem__row'>

<button type="cancel" className="cancelShowButton" onClick={this.props.hideClass}>
            Back
        </button>
    { <h3> {schoolClass.className}</h3>}
  { <h3> Started {schoolClass.startDate}</h3>}
  { <h3> Ends {schoolClass.endDate}</h3>}
    { <h3> Location {schoolClass.building}</h3>}  
    { <h3> Teacher {schoolClass.teacher}</h3>}  
    { <h3> ClassTimes {schoolClass.startTime}</h3>}  
    
    <NavLink className="addClassPath"
            to={`/edit-class`}
          >
            Edit
            </NavLink>
     
      </div>
    
   
    
  )
  }
}

