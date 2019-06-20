import React, { useEffect } from 'react';
import StyleClasses from './Cockpit.css';

const Cockpit = ( props ) => {

    // useEffect( () => {
    //     console.log("[Cockpit.js] useEffect");
    //     // Http Request ....
    //     setTimeout( ()  => {
    //         console.log("You made change in person component!")
    //     }, 1000);
    // }, [props.persons]); // does reload whenever user made change in person component

    useEffect( () => {
        console.log("[Cockpit.js] useEffect");
        // Http Request ....
        // const timer = setTimeout( ()  => {
        setTimeout( ()  => {
            console.log("Save data in cloud");
        }, 1000);
        return () => {
            // clearTimeout(timer);
            console.log("[Cockpit.js] cleanup work in useEffect");
        };
    }, []); // Does not reload evertime you render page because of empty array 

    useEffect( () => {
        console.log("[Cockpit.js] 2nd useEffect")
        return () => {
            console.log("[Cockpit.js] cleanup work in 2nd useEffect");
        }
    })


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


export default Cockpit;