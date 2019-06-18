import React, { Component } from 'react';
import StyleClasses from './App.css';
import Person from '../Components/Persons/Person/Person';

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
    let btnClass = "";

    if(this.state.showPersons){
        persons =(
        <div>
            {
              this.state.persons.map((person, index) => {
                  return <Person
                      click = {() => {this.deletePersonHandler(index)}}
                      name = {person.name} 
                      age = {person.age}
                      key = {person.id}
                      changed = {(event) => this.nameChangeHandler(event, person.id)}
                  />
              })
            }
        </div>
        );

        btnClass = StyleClasses.red;
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push( StyleClasses.red );
    }
    if(this.state.persons.length <=1){
      classes.push( StyleClasses.bold );
    }

    return (
         <div className={StyleClasses.App}>
       <h1> Hi, I'm a React App </h1>
       <p className= {classes.join(" ")} > React is fun </p>
       <button 
          className = {btnClass}
          // style = {buttonStyle}
          onClick = {this.togglePersonHandler}> Toggle Persons 
       </button>
       {persons}
      </div>
     
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;