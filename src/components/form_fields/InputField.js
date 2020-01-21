import React, {Component} from 'react';
import {PropTypes} from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            value: '',
            placeholder: '',
            onChange: '',
            defaultChecked: "checked",
            label: '',
        }
    }

    render() {
        const {name, type, value, placeholder, onChange, defaultChecked, label} = this.props;

        return (
            <label>{label}
                <input
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    defaultChecked={defaultChecked}
                />
            </label>
        )
    }
}

InputField.defaultProps = {
    type: "text",
};

InputField.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'date', 'checkbox', 'number', 'password']),
    value: PropTypes.any,
    onChange: PropTypes.func,
};

export default InputField;