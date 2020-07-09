import React from 'react';

class SchoolClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            StartDate: new Date(),
            EndDate: new Date(),
            Building: '',
            Room: '',
            Teacher: '',
            Sun: false,
            Mon: false,
            Tue: false,
            Wed: false,
            Thursday: false,
            Friday: false,
            Sat: false,
            StartTime:'',
            EndTime:''


        }
      }

  render() {
    return <div />
  }
}

export default SchoolClass