import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
//import './ShowDetails.css';

class AddSchoolClassForm extends React.Component {
  static contextType = ApiContext;
 // static contextType = ApiContext;
  // component that allows user
  // to fill in show details
  static defaultProps = {
    classId: '',
    className: '',
    finishDate: '',
    startDate: '',
    building: '',
    room: '',
    teacher: '',
    dayOfWeek:{
    Sun: false,
            Mon: false,
            Tue: false,
            Wed: false,
            Thursday: false,
            Friday: false,
            Sat: false,
    },
            StartTime:'',
            EndTime:''
  };

  constructor(props) {
    //states a show can have
    super(props);
    this.state = {
      id: '',
      className: {
        value: '',
        touched: false
      },
      finishDate: "",
      startDate: "",
      building: {
        value: '',
        touched: false
      },
      room: {
        value: '',
        touched: false
      },
      teacher: {
        value: '',
        touched: false
      },
      dayOfWeek:{
        Sun: false,
                Mon: false,
                Tue: false,
                Wed: false,
                Thurs: false,
                Fri: false,
                Sat: false,
        },
        room: {
            value: '',
            touched: false
          },
          startTime: {
            value: '',
            touched: false
          },
          endTime: {
            value: '',
            touched: false
          }
       

    };
  }
  //methods to update show state from user input
  cancelHandle = (e) => {
    e.preventDefault();
   // this.props.history.push(`/`);
   this.props.history.goBack();
  }

  updateClassName(className) {
    console.log("classname is " + className);
    this.setState({ className: { value: className, touched: true } });
    console.log("state classname "+ this.state.className);
  }

  updateBuilding(building) {
    this.setState({ building: { value: building, touched: true } });
  }

  updateRoom(room) {
    console.log("update room");
    this.setState({ room: { value: room, touched: true } });
  }

  updateTeacher(teacher) {
    this.setState({ teacher: { value: teacher, touched: true } });
  }

  updateDay(dayOfWeek) {
    console.log(dayOfWeek);
    console.log(this.state);
    let days={...this.state.dayOfWeek};
    let checked=!this.state.dayOfWeek[dayOfWeek];
    days[dayOfWeek] = checked;
    this.setState({ dayOfWeek:  days});
    console.log(this.state);
  }

  updateStartDate(date) {
    this.setState({ startDate: date });
  }

  updateFinishDate(date) {
    this.setState({ finishDate: date });
  }

  updateStartTime(time) {
    this.setState({ startTime: { value: time, touched: true } });
  }

  updateEndTime(time) {
    this.setState({ endTime: { value: time, touched: true } });
  }

  render() {

    return (
      <div id="show-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let schoolClass = {
            classId: Math.random(),
            className: this.state.className.value,
            finishDate: this.state.finishDate,
            startDate: this.state.startDate,
            building: this.state.building.value,
            room: this.state.room.value,
            teacher: this.state.teacher.value,
            startTime:this.state.startTime.value,
            endTime: this.state.endTime.value,
            dayOfWeek: this.state.dayOfWeek
           
          }

          console.log("object classname"+schoolClass);
          //we needed a callback function for 
          // add show
          // in app.js add show does a call/promise to backend
          // can happen asyncronously
          // callback function ensures we have newid from add show context method
        this.context.addSchoolClass(schoolClass);
       // this.props.history.push(`/`);
       this.props.history.goBack();
        }}>
          <h2 className="classDetailsHeading"> Class Details</h2>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="class__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="classname">Name *</label>
            <input type="text" className="folder__control"
              name="classname" id="classname" value={this.state.className.value} onChange={e => this.updateClassName(e.target.value)} required="required"/>
            <label for="startDate">Start Date</label>
            <input type="date" id="startDate" name="startDate" onChange={e => this.updateStartDate(e.target.value)} ></input>
            <label for="finishDate">Finish Date</label>
            <input type="date" id="finishDate" name="finishDate" onChange={e => this.updateFinishDate(e.target.value)}></input>
          
            <label htmlFor="name">Building*</label>
            <input type="text" className="folder__control"
              name="building" id="building" value={this.state.building.value} onChange={e => this.updateBuilding(e.target.value)} />
            <label htmlFor="name">Room *</label>
            <input type="text"  className="room"
              name="room" id="room" value={this.state.room.value} onChange={e => this.updateRoom(e.target.value)} />
            <label htmlFor="name">Teacher *</label>
            <input type="text" className="folder__control"
              name="showdescription" id="showdescription" value={this.state.teacher.value} onChange={e => this.updateTeacher(e.target.value)} />
          
           <input type="checkbox"  id="Sun" value={'Sun'} onChange={e=>this.updateDay(e.target.value)} />
           <label for="Sun"> Sun</label><br></br>
           <input type="checkbox"  id="Mon" value={'Mon'}  onChange={e=>this.updateDay(e.target.value)} />
           <label for="Mon"> Mon</label><br></br>
           <input type="checkbox"  id="Tue" value={'Tue'}  onChange={e=>this.updateDay(e.target.value)} />
           <label for="Tues"> Tues</label><br></br>
           <input type="checkbox"  id="Wed" value={'Wed'}   onChange={e=>this.updateDay(e.target.value)} />
           <label for="Wed"> Wed</label><br></br>
           <input type="checkbox"  id="Thur" value={'Thurs'} onChange={e=>this.updateDay(e.target.value)} />
           <label for="Thurs"> Thurs</label><br></br>
           <input type="checkbox"  id="Fri" value={'Fri'} onChange={e=>this.updateDay(e.target.value)} />
           <label for="Fri"> Fri</label><br></br>
           <input type="checkbox"  id="Sat" value={'Sat'}  onChange={e=>this.updateDay(e.target.value)} />
           <label for="Sat"> Sat</label><br></br>
           <label htmlFor="name">Start Time e.g. 8:30 or 2:15 pm *</label>
           <input type="text" className="folder__control"
              name="startTime" id="startTime" value={this.state.startTime.value} onChange={e => this.updateStartTime(e.target.value)} />
             <label htmlFor="name">End Time e.g. 8:30 or 2:15 pm *</label>
             <input type="text" className="folder__control"
              name="endTime" id="endTime" value={this.state.endTime.value} onChange={e => this.updateEndTime(e.target.value)} />
          </div>
          <div className="addShow__button__group">

            <button type="submit" className="saveShowButton" onClick={this.context.a}>
              Save
        </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddSchoolClassForm ;