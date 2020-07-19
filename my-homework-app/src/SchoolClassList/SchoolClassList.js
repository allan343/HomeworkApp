import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SchoolClassItem from '../SchoolClassItem/SchoolClassItem';
import HomeworkList from '../HomeworkList/HomeworkList'
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

  closeClass(classId) {
 
    this.setState({  clicked: false });
   
  }


  render() {
    const { schoolClasses } = this.props
    console.log(schoolClasses);
    return (
      <section className='SchoolClassList'>
     
     {(this.state.clicked)? <ClassDetails classId={this.context.getClassId()} hideClass={()=>{this.setState({clicked:false})}} /> : 
       <div>
     <ul className='SchoolClassList__list' aria-live='polite'>
          {schoolClasses.map(schoolClass =>
  
            <li id="class" onClick={() => this.classClicked(schoolClass.classId)}> 
              <SchoolClassItem
              key={schoolClass.classId}
             {...schoolClass}
              />
            </li>
          )}
        </ul>
        <NavLink className="addHomeWorkPath"
        to={`/add-homework`}
      >
      Homework  +
        </NavLink>
<HomeworkList homeworkList={this.context.homeworkList} ></HomeworkList>
            </div>
          }

       
      </section>
    );
  }
}

export default SchoolClassList;
