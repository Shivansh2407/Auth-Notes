import React from 'react';
import PropTypes from 'prop-types';

const Note = (props) => {
    return (
        <div className="singleNote">
            {props.noteContent}
        </div>
    )
}


Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;