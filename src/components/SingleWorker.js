import React, { Component, PropTypes } from 'react';

class SingleWorker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { username, name, surname, congratulationMessage, id } = this.props;
        //console.log(this.props);
        return (
            <li>
                {`${id} ${username} ${name} ${surname} ${congratulationMessage}`}
                {/*<button onClick={this.props.onDelete(this.props.id)}>Delete</button>*/}
            </li>
        );
    }
}

SingleWorker.propTypes = {
    username: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    congratulationMessage: PropTypes.string,
};

export default SingleWorker;