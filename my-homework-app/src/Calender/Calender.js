import React from 'react';

import SchoolClassList from '../SchoolClassList/SchoolClassList';
import HomeworkList from '../HomeworkList/HomeworkList';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';

export default class Calender extends React.Component {

  static contextType = ApiContext;

   //filter shows by their not yet watching state
  //only show shows that have that state for this view
  render() {
    return (
      <span className='NoteListMain__button-container'>
       
       <HeaderNav></HeaderNav>
       <label for="startDate">Select a day</label>
            <input type="date" id="startDate" name="startDate" onChange={e => this.updateStartDate(e.target.value)} ></input>
        Classes:
       <SchoolClassList schoolClasses={this.context.schoolClasses} ></SchoolClassList>
       Homework due that day:
       <HomeworkList homeworkList={this.context.homeworkList} ></HomeworkList>
       
      </span>
    )
  }
}