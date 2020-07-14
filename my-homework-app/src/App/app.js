import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddSchoolClassForm from '../AddSchoolClassForm/AddSchoolClassForm';
import Home from '../Home/Home';
import Calender from '../Calender/Calender';
import Homework from '../Homework/Homework';
import ApiContext from '../ApiContext/ApiContext';



export default class App extends Component {
    state = {
        //array that holds all shows
       
        schoolClasses: [],
        homework: [],
        id:''
    };

    handleAddSchoolClass = (classObject) => {
                console.log(classObject);
             
   
                    // this.state.schoolClasses.push(classObject);
                    const newArr= [...this.state.schoolClasses, classObject];
                     this.setState({
                        schoolClasses: newArr
                    });

                    
           
     };


    renderNavRoutes() {

        return (
            <>
                <Route
                    key={'/'}
                    exact path={'/'}
                    component={Home}
                />

                <Route
                    key={'/calender'}
                    exact path={'/calender'}
                    component={Calender}
                />

                <Route
                    key={'/homework'}
                    exact path={'/homework'}
                    component={Homework}
                />

                <Route exact path="/add-class" render={
                    (routeProps) => {
                        return <AddSchoolClassForm {...routeProps}>
                        </AddSchoolClassForm>
                    }} />
              

            </>
        );
    }

    renderMainRoutes() {
    }


    render() {
        const value = {
            schoolclasses: this.state.schoolclasses,
            homework: this.state.homework,
            addSchoolClass: this.handleAddSchoolClass,
           
        };
        return (
           
           <ApiContext.Provider value={value}>
                <div className="App">
                    <header className="App__header">
              
                    </header>
                    <div >{this.renderNavRoutes()}</div>
                  <div >{this.renderMainRoutes()}</div>
                </div>
            </ApiContext.Provider>
        );
    }
}