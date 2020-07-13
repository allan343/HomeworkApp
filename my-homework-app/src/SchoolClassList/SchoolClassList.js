import React, { Component } from 'react';
import SchoolClassItem from '../SchoolClassItem/SchoolClassItem';


class SchoolClassList extends Component {
  static defaultProps = {
    schoolclasses: []
  };

  render() {
    const { schoolclasses } = this.props
    return (
      <section className='SchoolClassList'>
     
        <ul className='BookmarkList__list' aria-live='polite'>
          {schoolclasses.map(schoolclass =>
            <li><SchoolClassItem
              key={schoolclass.id}
              {...schoolclass}
            />
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default SchoolClassList;
