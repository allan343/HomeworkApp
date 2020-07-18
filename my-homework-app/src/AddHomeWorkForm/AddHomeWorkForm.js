import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
//import './ShowDetails.css';

class AddHomeworkForm extends React.Component {
  static contextType = ApiContext;
  // static contextType = ApiContext;
  // component that allows user
  // to fill in show details
  static defaultProps = {
    homeworkId: '',
    description: '',
    schoolClass: '',
    type: '',
    dueDate: '',
    dueTime: '',
    priority: ''
  };

  constructor(props) {
    //states a show can have
    super(props);
    this.state = {
      homeworkId: '',
      description: {
        value: '',
        touched: false
      },
      schoolClass: "",
      type: "",
      dueDate: "",
      dueTime: {
        value: '',
        touched: false
      },
      priority: ""
    };

   // this.updateClass = this.updateClass.bind(this);
  }
  //methods to update show state from user input
  cancelHandle = (e) => {
    e.preventDefault();
    this.props.history.push(`/`);
  }

  updateDescription(description) {

    this.setState({ description: { value: description, touched: true } });

  }
  /*
  updateClass(schoolClass) {
    console.log("updateclass "+schoolClass);
    this.setState({ schoolClass:schoolClass });
  }*/
  updateClass =(event)=> {
    console.log(event.target.value);
    this.setState({ schoolClass: event.target.value });
  };
  updateType(type) {

    this.setState({ type: type });
  }

  updateDueDate(date) {
    console.log(date);
    var d = new Date(date);
    var n = d.getDay();
    console.log(n);
    this.setState({ dueDate: date });
  }

  updateDueTime(time) {

    this.setState({ dueTime: { value: time, touched: true } });
  }

  updatePriority(priority) {
    this.setState({ priority: priority });
  }



  render() {
    let classList = this.context.schoolClasses;
    return (
      <div id="show-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let homework = {
            homeworkId: Math.random(),
            description: this.state.description.value,
            schoolClass: this.state.schoolClass,
            type: this.state.startDate,
            dueDate: this.state.dueDate,
            dueTime: this.state.dueTime.value,
            priority: this.state.priority

          }

          this.context.addHomework(homework);

          this.props.history.push(`/`);
          console.log("Homework" + this.context.homeworkList);
        }}>
          <h2 className="classDetailsHeading"> Class Details</h2>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="class__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="homeworkDesc">Description *</label>
            <input type="text" className="folder__control"
              name="classname" id="classname" value={this.state.description.value} onChange={e => this.updateDescription(e.target.value)} />
            <label for="cars">Class:</label>
            <select name="schoolClass" id="schoolClass"  onChange={this.updateClass}>
            <option value="-">--select--</option>
              {

                classList.map(schoolClass =>

                  <option value={schoolClass.className}>{schoolClass.className}</option>
                )
              }
            </select>
            <label for="classType">Type:</label>
            <select name="classType" id="classType">
              <option value="Homework">Homework</option>
              <option value="Test">Test</option>
              <option value="Study">Study</option>
              <option value="Read">Read</option>
              <option value="Paper">Paper</option>
              <option value="Presentation">Presentation</option>
              <option value="Lab">Lab</option>
              <option value="Final">Final</option>
              <option value="Midterm">Midterm</option>
              <option value="Quiz">Quiz</option>
              <option value="Project">Project</option>
            </select>
            <label for="dueDate">Due Date</label>
            <input type="date" id="finishDate" name="finishDate" onChange={e => this.updateDueDate(e.target.value)}></input>


            <label htmlFor="name">Due Time e.g. 8:30 or 2:15 pm *</label>
            <input type="text" className="folder__control"
              name="startTime" id="startTime" value={this.state.dueTime.value} onChange={e => this.updateDueTime(e.target.value)} />
            <label for="priority">Priority</label>
            <select name="priority" id="priority">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
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

export default AddHomeworkForm;