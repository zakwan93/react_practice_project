import React from 'react';
import StyleClasses from './Cockpit.css';

const cockpit = ( props ) => {

    const classes = [];
    let btnClass = "";
   
    if(props.ShowPersons){
        btnClass = StyleClasses.red;
    }

    if(props.persons.length <= 2){
        classes.push(StyleClasses.red );
    }
    if(props.persons.length <=1){
        classes.push(StyleClasses.bold );
    }

    return (
        <div className = {StyleClasses.Cockpit}>
            <h1> {props.title} </h1>
            <p className= {classes.join(" ")} > React is fun </p>
            <button 
                className = {btnClass}
                // style = {buttonStyle}
                onClick = {props.toggle}> Toggle Persons 
            </button>
            
        </div>
    );
};


export default cockpit;