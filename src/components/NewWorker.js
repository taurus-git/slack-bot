import React, {Component} from 'react';
import {database} from './firebase';
import './NewWorker.css';
import InputField from './form_fields/InputField'
import Textarea from './form_fields/Textarea';

class NewWorker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            surname: '',
            birthDayDate: '',
            firstWorkDay: '',
            birthdayMessage: '',
            anniversaryMessage: '',
            sendBirthdayMessage: true,
            sendAnniversaryMessage: true,
        };

        this.dataRef = database.collection('/workers');
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };

    handleDateChange = event => {
        event.preventDefault();
        const timestamp = new Date(event.target.value);

        this.setState({
            [event.target.name]: timestamp
        })
    };

    sendDateInString = date => {
        let dateString = date;
    };

    handleSubmit = event => {
        event.preventDefault();
        this.dataRef.doc().set(this.state)
    };

    isCheckboxChecked = event => {
        let isCheckboxChecked = event.target.checked;

        isCheckboxChecked ?
            this.setState({[event.target.name]: true}) :
            this.setState({[event.target.name]: false});
    };

    render() {

        return (
            <div>
                <h2>Add new worker:</h2>
                <form onSubmit={this.handleSubmit} className="SingleWorker">

                    <InputField
                        name={"username"}
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder={"place for Slack username"}
                        label={"Username in Slack:"}
                    />

                    <InputField
                        name={"name"}
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder={"workers's name"}
                        label={"Name:"}
                    />

                    <InputField
                        name={"surname"}
                        type='text'
                        value={this.state.surname}
                        placeholder={"workers's surname"}
                        onChange={this.handleChange}
                        label={"Surname:"}
                    />

                    <fieldset>
                        <legend>Worker's Birth Day date:</legend>
                        <InputField
                            name={"birthDayDate"}
                            type={"date"}
                            value={this.sendDateInString(this.state.birthDayDate)}
                            onChange={this.handleDateChange}
                            label={"Check date and month"}
                        />

                        <InputField
                            name={"sendBirthdayMessage"}
                            type={"checkbox"}
                            sendBirthdayMessage={this.state.sendBirthdayMessage}
                            label={"Check to send text"}
                            onChange={this.isCheckboxChecked}
                        />

                        <Textarea
                            name={"birthdayMessage"}
                            value={this.state.birthdayMessage}
                            onChange={this.handleChange}
                            placeholder={"BD congratulation text"}
                            cols="60"
                            rows="5"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Worker's First Day at Hyperion:</legend>

                        <InputField
                            name={"firstWorkDay"}
                            type="date"
                            value={this.sendDateInString(this.state.firstWorkDay)}
                            onChange={this.handleDateChange}
                            label={"Check date and month"}
                        />

                        <InputField
                            name={"sendAnniversaryMessage"}
                            type={"checkbox"}
                            sendAnniversaryMessage={this.state.sendAnniversaryMessage}
                            label={"Check to send text"}
                            onChange={this.isCheckboxChecked}
                        />

                        <Textarea
                            name={"anniversaryMessage"}
                            value={this.state.anniversaryMessage}
                            onChange={this.handleChange}
                            placeholder={"congratulation text"}
                            cols="60"
                            rows="5"
                        />
                    </fieldset>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default NewWorker;