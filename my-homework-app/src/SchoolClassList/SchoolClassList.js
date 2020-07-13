import React, { Component } from 'react';
//import './FilterableList.css';
import SchoolClass from '../SchoolClass/SchoolClass';

class SchoolClassList extends Component {
  render() {
    const list = this.props.files
        .map((file, key) => <SchoolClass {...file} key={key} />);
    return (
      <div className="SchoolClastList">
        {list}
      </div>
    );
  }
}



export default SchoolClassList;