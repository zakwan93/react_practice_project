import React, { Component } from 'react';
import StyleClasses from './App.css';
// import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {

  // Component crete life cycle steps

  constructor(props){  //1 
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      {id: 'p1', name: 'Zakwan', age: 25},
      {id: 'p2', name: 'Shehjad', age: 26},
      {id: 'p3', name: 'Yahya', age: 27}
    ],
    showPersons: false,
    showCockpit : true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state){
        console.log({state: props.appTitle}); //2
        return state;
    }

  // componentWillMount(){
  //   console.log("[App.js] componentWillMount"); // 2
  // }

  componentDidMount(){
    console.log("[App.js] componentDidMount"); // 3
  }

  // Update componnent hooks
  shouldComponentUpdate(nextProp, nextState){
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate");
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

    this.setState((prevState, props) => {
      return{
        persons: persons ,
        changeCounter: prevState.changeCounter + 1
      };
    }); 

    // this.setState({ persons: persons })
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
    console.log("[App.js] renderingg..... ") // 3

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
      // <WithClass classes = {StyleClasses.App} >
        // {/* <div className={StyleClasses.App}> */}
        <Aux>
            <button onClick = {() => 
            {
                this.setState({showCockpit: false});
              }
            }> Remove Cockpit </button>
            { this.state.showCockpit ? 
            <Cockpit 
              title = {this.props.appTitle}
              toggle = {this.togglePersonHandler} 
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            /> : null }
            {persons}
        </Aux>
          
        // {/* </div> */}
      // </WithClass> 
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App,StyleClasses.App);