import * as React from 'react';
import Person from '../src/components/persons';
import './App.css';





export default class App extends React.Component<any,any>{
   
    public state={
       persons:[
       {name:'charan',age:27},
       {name:'chaitanya',age:26},
       {name:'raja',age:28}
       ],
       showPersons:false
    }   
    
  public switchHandler =(newName:any)=>{
    this.setState({
       persons:[
         {name:newName,age:28},
         {name:'chaitanya kumar',age:30},
         {name:'rajarshi yelamati', age:66}
       ]
    })
  }

  public toggleHandler=()=>{
     const doesShow =this.state.showPersons;
     this.setState({showPersons:!doesShow})
    
  }

          // {two way binding}

  public onNameChangeHandler =(event:any)=>{
    this.setState({
      persons:[
        {name:'charan',age:26},
        {name:'chaitanya',age:30},
        {name:event.target.value, age:66}
      ]
   })
  }

   public render() {
     let persons =null;
        //  //outputting the lists from the state 
        // based on the condition
         
     if(this.state.showPersons){
       persons=(
           <div> 
              {this.state.persons.map((person)=>{
                return <Person  key="name" name ={person.name} age={person.age}/>
              })}
              {        
                /*  look above for iterating the list from an array and displaying the data in the form of a list <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person clickProp ={this.switchHandler.bind(this,'charann')} name={this.state.persons[1].name} age={this.state.persons[1].age} />
              <Person changed={this.onNameChangeHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
           </div>
       );
     }

    return (
          <div className="App">
            <button onClick ={this.toggleHandler}>switch</button> 
            {persons}
          </div>
    );
  };
}

