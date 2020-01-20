import React, {Component} from 'react';
import { PropTypes } from 'react';

class Textarea extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: '',
            onChange: '',
            placeholder: '',
            cols: '',
            rows: '',
        }
    }


render() {
    const { name, value, onChange, placeholder, cols, rows } = this.props;

    return (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                cols={cols}
                rows={rows}
            >
            </textarea>
            )
    }
}
    Textarea.defaultProps = {
        type: "text",
        className: ""
    }

    Textarea.propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string.isRequired,
    }


export default Textarea;



