import React, { Component } from 'react';
// import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import StyleClasses from  './Person.css';
import AuthContext from '../../../contex/auth-contex';

class Person extends Component {

    // CreateRef only work in class based components 
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authanticated);
    }

    render(){
        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {(context) => context.authanticated ? <p>Authanticated</p> : <p>Please log in </p>}
                </AuthContext.Consumer> */}
                
                {this.context.authanticated ? <p>Authanticated</p> : <p>Please log in </p>}
            
                <p onClick={this.props.click}> 
                    I'm {this.props.name}! 
                    and I'm {this.props.age} years old. 
                </p>
                <p> {this.props.children} </p>
                <input
                    // ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef} 
                    type = "text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>

            // 2 way wrap around Aux and use as manny html element I want

            // <Fragment>
            //     <p onClick={this.props.click}> I'm {this.props.name}! and I'm {this.props.age} years old. </p>
            //     <p> {this.props.children} </p>
            //     <input type = "text" onChange={this.props.changed} value={this.props.name} />
            // </Fragment>

            // 2 end

            /* <div className={StyleClasses.Person}  >
                <p onClick={this.props.click}> I'm {this.props.name}! and I'm {this.props.age} years old. </p>
                <p> {this.props.children} </p>
                <input type = "text" onChange={this.props.changed} value={this.props.name} />
            </div> */
        );  
    }      
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, StyleClasses.Person);








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