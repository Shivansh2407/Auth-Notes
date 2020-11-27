import React, {Component} from 'react';
import Note from'./Note/Note';
import AddNote from'./AddNote/AddNoteForm';
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

  addNote =(note) => {
    const BackUpState = this.state.notes;
    BackUpState.push({id: BackUpState.length + 1, noteContent: note})
    this.setState({
      notes: BackUpState
    });
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
        <AddNote addNote={this.addNote}/>
        </div>
    );
  }
}
export default App;
