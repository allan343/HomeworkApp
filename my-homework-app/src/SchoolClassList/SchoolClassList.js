import React, { Component } from 'react';
//import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class SchoolClastList extends Component {
  render() {
    const list = this.props.files
        .map((file, key) => <ListItem {...file} key={key} />);
    return (
      <div className="SchoolClastList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  files: []
};

export default SchoolClassList;