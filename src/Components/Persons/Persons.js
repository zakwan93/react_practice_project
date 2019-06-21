import React, { PureComponent } from 'react';  // If I use Pure componennt I don't have to use shouldAnyComponentUpdate method and check all the condition below I did before PureComponent took care of it by default
import Person from './Person/Person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state){
    //     console.log("[Persons.js] getDerivedStateFromProps"); //1
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[Persons.js] shouldComponentUpdate"); //2
    //     if(nextProps.persons !== this.props.persons ||
    //        nextProps.person !== this.person.clicked ||
    //        nextProps.person !== this.person.changed){
    //         return true;
    //     } else{
    //         return false;
    //     }   
    // }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate"); //3
        return { message: "Snapshot!" }
    }

    componentDidUpdate(prevProp, prevState, snapshot){
        console.log("[Persons.js] componennt did update") // 5. last step after render
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log("[Perosn.js] componentWillUnmount");
    }

    render(){ // 4
        console.log("[Person.js] rendering.....")
        return this.props.persons.map((person, index) =>{
                return(
                    <Person
                    click = {() => {this.props.clicked(index)}}
                    name = {person.name} 
                    age = {person.age}
                    key = {person.id}
                    changed = {(event) => this.props.changed(event, person.id)}
                    isAuth = {this.props.isAuthanticated}
                    />
                ); 
        });
    };
}

export default Persons;







//Function based || Presentation || Dumb || Stateless component 

/*
const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click = {() => {props.clicked(index)}}
        name = {person.name} 
        age = {person.age}
        key = {person.id}
        changed = {(event) => props.changed(event, person.id)}
    />
});

export default persons;
*/