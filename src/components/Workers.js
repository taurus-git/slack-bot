import React, { Component, PropTypes } from 'react';
import SingleWorker from "./SingleWorker";
import map from 'lodash/map';

class Workers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { workers } = this.props;

        return (
            <div>
                <h2>Workers list:</h2>
                <ul>
                    { map(workers, (worker, key) => <SingleWorker key={key} {...worker} />) }
                </ul>
            </div>
        );
    }
}

Workers.propTypes = {
    user: PropTypes,
    workersRef: PropTypes.object,
    workers: PropTypes.object
};

export default Workers;