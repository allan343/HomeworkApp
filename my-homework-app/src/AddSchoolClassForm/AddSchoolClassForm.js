import React from 'react';
//import ApiContext from '../ApiContext/ApiContext';
//import './ShowDetails.css';

class AddSchoolClassForm extends React.Component {
 // static contextType = ApiContext;
  // component that allows user
  // to fill in show details
  static defaultProps = {
    id: '',
    classname: '',
    finishdate: '',
    startdate: '',
    building: '',
    room: '',
    teacher: '',
    dayofweek:{
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
      classname: {
        value: '',
        touched: false
      },
      finishdate: "",
      startdate: "",
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
      dayofweek:{
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
          }
       

    };
  }
  //methods to update show state from user input
  cancelHandle = (e) => {
    e.preventDefault();
    this.props.history.push(`/`);
  }

  updateClassName(classname) {
    this.setState({ classname: { value: classname, touched: true } });
  }

  updateRoom(room) {
    this.setState({ room: { value: room, touched: true } });
  }

  updateStartDate(startdate) {
    this.setState({ startdate: { value: startdate, touched: true } });
  }

  updateEndDate(enddate) {
    this.setState({ enddate: { value: enddate, touched: true } });
  }

  updateTeacher(teacher) {
    this.setState({ teacher: { value: teacher, touched: true } });
  }

  updateDay(dayofweek) {
    let days={...this.state.dayofweek};
    let checked=!this.state.dayofweek[dayofweek];
    days[dayofweek] = checked;
    this.setState({ dayofweek:  days});
  }

  updateStartDate(date) {
    this.setState({ startdate: date });
  }

  updateFinishDate(date) {
    this.setState({ finishdate: date });
  }

  render() {

    return (
      <div id="show-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let schoolClass = {
            classname: this.state.showname.value,
            finishdate: this.state.finishdate,
            startdate: this.state.startdate,
            building: this.state.genre.building,
            teacher: this.state.seasons.teacher
           
          }
          //we needed a callback function for 
          // add show
          // in app.js add show does a call/promise to backend
          // can happen asyncronously
          // callback function ensures we have newid from add show context method
         /*this.context.addShow(show, (newid) => {
            this.setState({ id: newid });
            this.props.history.push(`/WatchingLog/${newid}`);
          });*/
        }}>
          <h2 className="classDetailsHeading"> Class Details</h2>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="class__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="classname">Name *</label>
            <input type="text" className="folder__control"
              name="classname" id="classname" value={this.state.classname.value} onChange={e => this.updateName(e.target.value)} />
            <label for="startdate">Start Date</label>
            <input type="date" id="startdate" name="startdate" onChange={e => this.updateStartDate(e.target.value)} ></input>
            <label for="finishdate">Finish Date</label>
            <input type="date" id="finishdate" name="finishdate" onChange={e => this.updateFinishDate(e.target.value)}></input>
          
            <label htmlFor="name">Genre *</label>
            <input type="text" className="folder__control"
              name="building" id="building" value={this.state.building.value} onChange={e => this.updateBuilding(e.target.value)} />
            <label htmlFor="name">Number Of Seasons *</label>
            <input type="number" min="1" max="99" className="seasons"
              name="room" id="room" value={this.state.room.value} onChange={e => this.updateRoom(e.target.value)} />
            <label htmlFor="name">Description *</label>
            <input type="text" className="folder__control"
              name="showdescription" id="showdescription" value={this.state.teacher.value} onChange={e => this.updateTeacher(e.target.value)} />
          
           <input type="checkbox"  id="Sun" value={Sun} defaultChecked={props.checked} ref={props.key} onChange={this.updateDay(e.target.value)} />
           <label for="Sun"> Sun</label><br></br>
           <input type="checkbox"  id="Mon" value={Mon} defaultChecked={props.checked} ref={props.key} onChange={this.updateDay(e.target.value)} />
           <label for="Mon"> Mon</label><br></br>
           <input type="checkbox"  id="Tues" value={Tues} defaultChecked={props.checked} ref={props.key} onChange={this.updateDay(e.target.value)} />
           <label for="Tues"> Tues</label><br></br>
           <input type="checkbox"  id="Wed" value={Wed} defaultChecked={props.checked} ref={props.key} onChange={this.updateDay(e.target.value)} />
           <label for="Wed"> Wed</label><br></br>
           <input type="checkbox"  id="Thurs" value={Thurs} defaultChecked={props.checked} ref={props.key} onChange={this.updateDay(e.target.value)} />
           <label for="Thurs"> Thurs</label><br></br>
           <input type="checkbox"  id="Fri" value={Fri} defaultChecked={props.checked} ref={props.key} onChange={this.updateDay(e.target.value)} />
           <label for="Fri"> Thurs</label><br></br>
           <input type="checkbox"  id="Sat" value={Sat} defaultChecked={props.checked} ref={props.key} onChange={this.updateDay(e.target.value)} />
           <label for="Sat"> Thurs</label><br></br>
          </div>
          <div className="addShow__button__group">

            <button type="submit" className="saveShowButton" >
              Save
        </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddSchoolClassForm ;