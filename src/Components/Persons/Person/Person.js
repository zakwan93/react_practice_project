import React, { Component } from 'react';
import StyleClasses from  './Person.css'

class Person extends Component {
    render(){
        return (
            <div className={StyleClasses.Person}  >
                <p onClick={this.props.click}> I'm {this.props.name}! and I'm {this.props.age} years old. </p>
                <p> {this.props.children} </p>
                <input type = "text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );  
    }      
}

export default Person;








// Function Based component 
/*

import React from 'react';
import StyleClasses from  './Person.css'

const person = (props) => {
    return (
        <div className={StyleClasses.Person}  >
            <p onClick={props.click}> I'm {props.name}! and I'm {props.age} years old. </p>
            <p> {props.children} </p>
            <input type = "text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;

*/