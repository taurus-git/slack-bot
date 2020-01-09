import React, { Component, PropTypes } from 'react';

class SingleWorker extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (username){
        return function(){
            console.log(username);
        };

    }

    render() {
        const { username, name, surname, congratulationMessage } = this.props;

        return (
            /*<h3>{`${name} ${surname} ${congratulationMessage}`}</h3>*/
            <p onClick={this.handleClick(username)}>
                {`${name} ${surname} ${congratulationMessage}`}
            </p>
        );
    }
}

SingleWorker.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    congratulationMessage: PropTypes.string,
};

export default SingleWorker;