import React, {Component} from 'react';
import fire from '../../../config/Fire';

class AddNewNote extends Component {

    constructor(props){
        super(props);
        this.state = {
            newNameContent: '',
            newNoteContent: '',
            newDateContent: ''
        }
    }

    handleUserInput = (n) => {
        this.setState({
            newNameContent: n.target.value,
        });
    }

    handleUserInput1 = (c) => {
        this.setState({
            newNoteContent: c.target.value,
        });
    }

    handleUserInput2 = (d) => {
        this.setState({
            newDateContent: d.target.value,
        });
    }
    

    addNote = () => {
        // check if our new note is empty or not
        if(this.state.newNoteContent.trim() && this.state.newNameContent.trim() && this.state.newDateContent.trim()){
            this.props.addNote(this.state.newNameContent, this.state.newNoteContent, this.state.newDateContent);
            this.setState({
                newNameContent: '',
                newNoteContent: '',
                newDateContent: ''
            });
        }
    }

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="addNoteField">
                <div>
                <input type="text" 
                    className="NameField"
                    onChange={this.handleUserInput}
                    value={this.state.newNameContent}
                    placeholder="Write your Name" />
                <textarea
                    className="NoteField"                
                    onChange={this.handleUserInput1}
                    value={this.state.newNoteContent}
                    placeholder="Write a new note..." />
                <input type="date" 
                    className="DateField"
                    onChange={this.handleUserInput2}
                    value={this.state.newDateContent}/>
                </div>
                <br/><br/>
                <button 
                    className="addNoteBtn"
                    onClick={this.addNote}>Add Note</button>
                <button className="logOutBtn" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default AddNewNote;