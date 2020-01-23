import React, {Component} from 'react';
import { PropTypes } from 'react';

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: '',
            disabled: '',
            placeholder: '',
            onChange: '',
            cols: '',
            rows: '',
        }
    }


    render() {
        const {name, value, disabled, placeholder, onChange, cols, rows} = this.props;

        return (
            <textarea
                name={name}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                onChange={onChange}
                cols={cols}
                rows={rows}
            >
            </textarea>
        )
    }
}

Textarea.defaultProps = {
    type: "text",
};

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    disabled: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
};


export default Textarea;



