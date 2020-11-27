import React, {Component} from 'react';
import Note from './Note/Note';
import AddNewNote from './AddNewNote/AddNewNote';
import './Notes.css';
import fire from '../../config/Fire';
import Spinner from '../../assets/loader.gif';

class Notes extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: [],
            loading: true
        }
    }

    AddNewNote = (name, note, date) => {
        const BackUpState = this.state.notes;
        BackUpState.push({id: BackUpState.length + 1, name: name, content: note, date: date});
        fire.database().ref('Notes/').push({
            id: this.state.notes.length + 1,
            name: name,
            note: note,
            date: date
        }).then((data)=>{
            //success callback
            this.setState({
                notes: BackUpState
            })
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

    componentWillMount(){
        const BackUpState = this.state.notes;
        fire.database().ref('Notes/').once('value', function
        (snapshot) {
            snapshot.forEach(function(childSnapshot){
                BackUpState.push({id: BackUpState.length + 1,name: childSnapshot.val().name, content: childSnapshot.val().note, date: childSnapshot.val().date});
            })
        });
        this.setState({
            notes: BackUpState
        })
        // console.log(this.state);
    }

    componentDidMount(){
        setTimeout(function() {
          this.setState({
            loading: false
          });
        }.bind(this), 2000);
      }

    render(){
        return (
            <div className="notesApp">
                <h2>Crop Scouting Notes</h2>
                <tr>
                <td>Note Content</td>
                <td>Author</td>
                <td>Date</td>
                </tr>
                {
                    this.state.loading ? 
                    (
                        <div className="Spinner">
                            <img src={Spinner} className="ImgSpinner" alt="Spinner" />
                        </div>
                    ) : 
                    this.state.notes.map((note) => {
                        return (
                            <Note 
                                name = {note.name}
                                content = {note.content} 
                                date = {note.date}
                                id = {note.id} 
                                key = {note.id} />
                        )
                    })
                }
                <AddNewNote addNote={this.AddNewNote} />
            </div>
        );
    }
}

export default Notes;