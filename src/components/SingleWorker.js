import React, { Component, PropTypes } from 'react';

class SingleWorker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, username, name, surname, birthdayMessage, anniversaryMessage } = this.props;

        return (
            <li>
                { `${id} ${username} ${name} ${surname} ${birthdayMessage} ${anniversaryMessage}` }
                { <button onClick={() => this.props.onDelete(id)}>Delete</button> }
            </li>
        );
    }
}

SingleWorker.propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    birthdayMessage: PropTypes.string,
    anniversaryMessage: PropTypes.string,
};

export default SingleWorker;