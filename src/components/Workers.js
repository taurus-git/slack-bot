import React, { Component, PropTypes } from 'react';
import SingleWorker from "./SingleWorker";
import map from 'lodash/map';

class Workers extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        console.log("Button Clicked!")
    };

    render() {
        const { workers } = this.props;
        console.log("workers :", workers);
        return (
            <div>
                <h2>Workers list:</h2>
                <ul>
                    { map(workers, (worker, key) =>
                        <SingleWorker
                            key={key} {...worker}
                        />)
                    }
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