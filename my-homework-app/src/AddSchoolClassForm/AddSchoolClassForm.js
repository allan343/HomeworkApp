import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import './ShowDetails.css';

class AddSchoolClassForm extends React.Component {
  static contextType = ApiContext;
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
                Thursday: false,
                Friday: false,
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

  updateTeacher(teacher) {
    this.setState({ genre: { value: teacher, touched: true } });
  }

  updateSeasons(seasons) {
    this.setState({ seasons: { value: seasons, touched: true } });
  }

  updateDescription(showdescription) {
    this.setState({ showdescription: { value: showdescription, touched: true } });
  }

  updateLanguage(showlanguage) {
    this.setState({ showlanguage: { value: showlanguage, touched: true } });
  }

  render() {

    return (
      <div id="show-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let show = {
            showname: this.state.showname.value,
            finishdate: this.state.finishdate,
            startdate: this.state.startdate,
            genre: this.state.genre.value,
            seasons: this.state.seasons.value,
            showdescription: this.state.showdescription.value,
            showlanguage: this.state.showlanguage.value
          }
          //we needed a callback function for 
          // add show
          // in app.js add show does a call/promise to backend
          // can happen asyncronously
          // callback function ensures we have newid from add show context method
          this.context.addShow(show, (newid) => {
            this.setState({ id: newid });
            this.props.history.push(`/WatchingLog/${newid}`);
          });
        }}>
          <h2 className="showDetailsHeading"> Show Details</h2>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="show__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="showname">Name *</label>
            <input type="text" className="folder__control"
              name="showname" id="showname" value={this.state.showname.value} onChange={e => this.updateName(e.target.value)} />
            <label htmlFor="name">Genre *</label>
            <input type="text" className="folder__control"
              name="genre" id="genre" value={this.state.genre.value} onChange={e => this.updateGenre(e.target.value)} />
            <label htmlFor="name">Number Of Seasons *</label>
            <input type="number" min="1" max="99" className="seasons"
              name="seasons" id="seasons" value={this.state.seasons.value} onChange={e => this.updateSeasons(e.target.value)} />
            <label htmlFor="name">Description *</label>
            <input type="text" className="folder__control"
              name="showdescription" id="showdescription" value={this.state.showdescription.value} onChange={e => this.updateDescription(e.target.value)} />
            <label htmlFor="name">Language *</label>
            <input type="text" className="folder__control"
              name="showlanguage" id="showlanguage" value={this.state.showlanguage.value} onChange={e => this.updateLanguage(e.target.value)} />
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