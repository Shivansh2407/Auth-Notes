import React from 'react';
import PropTypes from 'prop-types';

const Note = (props) => {
    return (
        <tr>
            <td>{props.content}</td>
            <td>{props.name}</td>
            <td>{props.date}</td>
        </tr>
    )
}

Note.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}

export default Note;