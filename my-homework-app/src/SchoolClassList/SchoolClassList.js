import React, { Component } from 'react';
import SchoolClassItem from '../SchoolClassItem/SchoolClassItem';


class SchoolClassList extends Component {
  static defaultProps = {
    schoolclasses: []
  };

  render() {
    const { schoolClasses } = this.props
    console.log(schoolClasses);
    return (
      <section className='SchoolClassList'>
     
        <ul className='SchoolClassList__list' aria-live='polite'>
          {schoolClasses.map(schoolClass =>
  
            <li><SchoolClassItem
              key={schoolClass.classId}
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
