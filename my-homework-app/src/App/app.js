import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class App extends Component {
    state = {
        //array that holds all shows
        shows: [],
        schoolClasses: [],
        id:''
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

              

            </>
        );
    }




    render() {

        return (
           
           <ApiContext.Provider value={value}>
                <div className="App">
                    <header className="App__header">
              
                    </header>
                    <div >{this.renderNavRoutes()}</div>
                  <div >{this.renderMainRoutes()}</div>
                </div>
            //</ApiContext.Provider>
        );
    }
}