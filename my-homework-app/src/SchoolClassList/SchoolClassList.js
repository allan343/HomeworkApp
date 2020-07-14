import React, { Component } from 'react';
import SchoolClassItem from '../SchoolClassItem/SchoolClassItem';


class SchoolClassList extends Component {
  static defaultProps = {
    schoolclasses: []
  };

  render() {
    const { schoolClasses } = this.props
    return (
      <section className='SchoolClassList'>
     
        <ul className='BookmarkList__list' aria-live='polite'>
          {schoolClasses.map(schoolClass =>
            <li><SchoolClassItem
              key={schoolClass.id}
              {...schoolClass}
            />
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default SchoolClassList;
