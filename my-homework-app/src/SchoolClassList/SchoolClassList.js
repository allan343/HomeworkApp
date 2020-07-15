import React, { Component } from 'react';
import SchoolClassItem from '../SchoolClassItem/SchoolClassItem';
import ClassDetails from '../ClassDetails/ClassDetails';
import ApiContext from '../ApiContext/ApiContext';

class SchoolClassList extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    schoolclasses: []
  };

  constructor(props)
  {
    super(props);
  this.state = {
    clicked: false
  };
  }
  classClicked(classId) {
    console.log("classid "+classId);
    this.setState({  clicked: true });
    this.context.setClassId(classId);
  //alert("hi!");
  console.log("h1!"+ this.context.getClassId());
  }


  render() {
    const { schoolClasses } = this.props
    console.log(schoolClasses);
    return (
      <section className='SchoolClassList'>
     
     {(this.state.clicked)? <ClassDetails classId={this.context.getClassId()} hideshow={()=>{}} /> :  <ul className='SchoolClassList__list' aria-live='polite'>
          {schoolClasses.map(schoolClass =>
  
            <li id="class" onClick={() => this.classClicked(schoolClass.classId)}> 
              <SchoolClassItem
              key={schoolClass.classId}
             {...schoolClass}
              />
            </li>
          )}
        </ul>}

       
      </section>
    );
  }
}

export default SchoolClassList;
