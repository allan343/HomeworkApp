import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddSchoolClassForm from '../AddSchoolClassForm/AddSchoolClassForm';
import EditSchoolClassForm from '../EditSchoolClassForm/EditSchoolClassForm';
import Home from '../Home/Home';
import Calender from '../Calender/Calender';
import Homework from '../Homework/Homework';
import ApiContext from '../ApiContext/ApiContext';



class App extends Component {
    state = {
        //array that holds all shows
       
        schoolClasses: [],
        homework: [],
        classId:''
    };

    handleAddSchoolClass = (classObject) => {
                console.log(classObject);
                    // this.state.schoolClasses.push(classObject);
                    const newArr= [...this.state.schoolClasses, classObject];
                     this.setState({
                        schoolClasses: newArr
                    });  
     };

     handleGetClass = (id) => {
        return this.state.schoolClasses.find(
            function (schoolClass) {
            return schoolClass.classId == id;
        });
    };

    setClassId = (classId) => {
        //console.log("context id "+classId);
        this.setState({
            classId: classId
        });
        //console.log("set id "+this.state.classId);
     
    };

    getClassId = () => {
        console.log("get id "+this.state.classId);
        return this.state.classId;
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
              
              <Route exact path="/edit-class" render={
                    (routeProps) => {
                        return <EditSchoolClassForm {...routeProps}>
                        </EditSchoolClassForm>
                    }} />

            </>
        );
    }

    renderMainRoutes() {
    }


    render() {
        const value = {
            schoolClasses: this.state.schoolClasses,
            homework: this.state.homework,
            addSchoolClass: this.handleAddSchoolClass,
            setClassId: this.setClassId,
            getClassId: this.getClassId,
            getClass: this.handleGetClass
           
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

export default App;