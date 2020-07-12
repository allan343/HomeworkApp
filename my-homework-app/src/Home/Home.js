import React from 'react';

//import ShowListNav from '../ShowListNav/ShowListNav';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';

export default class Home extends React.Component {
 // static contextType = ApiContext;

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
       <SchoolClassList name={'towatch'} shows={this.context.shows.filter(show => show.towatch)} history={this.props.history}>
        
        </SchoolClassList>
      
      </span>
    )
  }
}