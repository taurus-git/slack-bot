import React, { Component, PropTypes } from 'react';
import {database} from "./firebase";

class SingleWorker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            surname: '',
            birthdayMessage: '',
            anniversaryMessage: '',
        };

        this.dataRef = database.collection('/workers');
    }

    handleDelete(id) {
        this.dataRef.doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    };

    render() {
        const { id, username, name, surname, birthdayMessage, anniversaryMessage } = this.props;

        return (
            <li key={id}>
                { `${username} ${name} ${surname} ${birthdayMessage} ${anniversaryMessage}` }
                { <button onClick={() => this.handleDelete(id)}>Delete</button> }
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