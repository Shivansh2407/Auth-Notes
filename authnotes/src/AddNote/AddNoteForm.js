import React, {Component} from 'react';

class AddNote extends Component {

    constructor(props){
        super(props);
        this.state = {
          newNoteContent: ''
        }
      }

    handleUserinput = (e) => {
        this.setState({
            newNoteContent : e.target.value
        });
        console.log(this.state.newNoteContent);
    }

    addNote = (props) => {
        this.props.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent: ''
        });
    }

    render() {
        return (
            <div className="addNoteField">
                <input type="text"
                    className="NoteField"
                    onChange={this.handleUserinput}
                    value={this.state.newNoteContent} />
                <button className="addNoteBtn"
                    onClick={this.addNote}>+ Add Note</button>
            </div>
        )
    }
}

export default AddNote;