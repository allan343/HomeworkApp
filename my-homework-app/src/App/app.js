import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class App extends Component {
    state = {
        //array that holds all shows
        shows: [],
        id:''
    };

    render() {

        return (
           
          /*/  <ApiContext.Provider value={value}>
                <div className="App">
                    <header className="App__header">
              
                    </header>
                    <div >{this.renderNavRoutes()}</div>
                  <div >{this.renderMainRoutes()}</div>
                </div>
            //</ApiContext.Provider>*/
        );
    }
}