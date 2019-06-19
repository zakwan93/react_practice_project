import React, { Component } from 'react';
import StyleClasses from './App.css';
// import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'p1', name: 'Zakwan', age: 25},
      {id: 'p2', name: 'Shehjad', age: 26},
      {id: 'p3', name: 'Yahya', age: 27}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
    }); 

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) =>{
    const newPersonsArray = [...this.state.persons];
    newPersonsArray.splice(personIndex,1);
    this.setState({persons: newPersonsArray});
  }

  render() {

    let persons = null;
    if(this.state.showPersons){
        persons = (
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />
        );
    }

    return (
      <div className={StyleClasses.App}>

       <Cockpit 
        title = {this.props.appTitle}
        toggle = {this.togglePersonHandler} 
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        />
       {persons}

      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;