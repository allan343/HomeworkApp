import React, { Component } from 'react';
import HomeworkItem from '../HomeworkItem/HomeworkItem';
import ApiContext from '../ApiContext/ApiContext';

class HomeworkList extends Component {
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
     
      <ul className='SchoolClassList__list' aria-live='polite'>
          {/*schoolClasses.map(schoolClass =>
  
            <li id="class" onClick={() => this.classClicked(schoolClass.classId)}> 
              <HomeworkItem
              key={schoolClass.classId}
             {...schoolClass}
              />
            </li>
          )*/}
        </ul>

       
      </section>
    );
  }
}

export default HomeworkList;
