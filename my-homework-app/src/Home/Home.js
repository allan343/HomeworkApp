import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ShowClassList from '../SchoolClassList/SchoolClassList';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';
import SchoolClassList from '../SchoolClassList/SchoolClassList';

export default class Home extends React.Component {
 static contextType = ApiContext;

   //filter shows by their not yet watching state
  //only show shows that have that state for this view
  render() {
    return (
      <span className='NoteListMain__button-container'>
       
       <HeaderNav></HeaderNav>
       <NavLink className="addClassPath"
            to={`/add-class`}
          >
            +
            </NavLink>
            Hello
    <SchoolClassList schoolClasses={this.context.schoolClasses} ></SchoolClassList>
      
      </span>
    )
  }
}