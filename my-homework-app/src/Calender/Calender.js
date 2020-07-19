import React from 'react';
import CalenderSchoolClassList from '../CalenderSchoolClassList/CalenderSchoolClassList';
import HomeworkList from '../HomeworkList/HomeworkList';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';

export default class Calender extends React.Component {

  static contextType = ApiContext;
/*
  static defaultProps = {
      day: ["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"],
      dayOfWeek:''
  };
*/
  constructor(props) {
    //states a show can have
    super(props);
    this.state = {
      day: ["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"],
      dayOfWeek: '',
      date:''
    };

   // this.updateClass = this.updateClass.bind(this);
  }

  updateDayOfWeek(date) {
    console.log(date);
    this.setState({date: date});
    var selectedDate = new Date(date);
    var dayOfWeekIndex = selectedDate.getDay();
    console.log(dayOfWeekIndex);
    console.log(this.state.day[dayOfWeekIndex] );
    this.setState({ dayOfWeek: this.state.day[dayOfWeekIndex] });
  }

  render() {

    
    return (
      <span className='NoteListMain__button-container'>
       
       <HeaderNav></HeaderNav>
       <label for="startDate">Select a day</label>
            <input type="date" id="startDate" name="startDate" onChange={e => this.updateDayOfWeek(e.target.value)} ></input>
        Classes:
        <CalenderSchoolClassList schoolClasses={ this.context.schoolClasses.filter(schoolClass => schoolClass.dayOfWeek[this.state.dayOfWeek]==true)} ></CalenderSchoolClassList>
       Homework due that day:
       <HomeworkList homeworkList={   this.context.homeworkList.filter(homework => homework.dueDate==this.state.date)} ></HomeworkList>
      </span>
    )
  }
}