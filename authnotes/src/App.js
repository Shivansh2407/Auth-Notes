import React, {Component} from 'react';
import Note from'./Note/Note';
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes : [
        {id:1, noteContent:'First Note'},
        {id:2, noteContent:'Second Note'}
      ]
    }
  }
    render(){
    return (
      <div className="App">
        {
        this.state.notes.map((note) => {
          return (
            <Note 
            noteContent = {note.noteContent}
            id = {note.id}
            key = {note.id} />
          )
        })
        }
      </div>
    );
  }
}
export default App;
