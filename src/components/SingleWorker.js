import React, { Component, PropTypes } from 'react';

class SingleWorker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { username, name, surname, congratulationMessage } = this.props;

        return (
            <li>
                {`${username} ${name} ${surname} ${congratulationMessage}`}
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