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
    const { homeworkList } = this.props
    console.log(homeworkList);
    return (
      <section className='SchoolClassList'>
     
      <ul className='SchoolClassList__list' aria-live='polite'>
          {homeworkList.map(homework =>
  
            <li>
              <HomeworkItem
              key={homework.homeworkId}
             {...homework}
             />
            </li>
          )}
        </ul>

       
      </section>
    );
  }
}

export default HomeworkList;
