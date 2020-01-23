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
            sendBirthdayMessage: '',
            sendAnniversaryMessage: '',
            label: '',
        }
    }

    render() {
        const {name, type, value, placeholder, onChange, sendBirthdayMessage, sendAnniversaryMessage, label} = this.props;

        let sendMessage = new Boolean(true);
        if ( name === "sendBirthdayMessage" ) {
            sendMessage = sendBirthdayMessage;
        } else if ( name === "sendAnniversaryMessage" ) {
            sendMessage = sendAnniversaryMessage;
        }

            return (
                <label>{label}
                    <input
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        checked={sendMessage}
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
    sendMessage: PropTypes.bool,
};

export default InputField;