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
            firstWorkingDay: '',
            birthdayMessage: '',
            anniversaryMessage: '',
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
                            type={"checkbox"}
                            defaultChecked={"checked"}
                            label={"Check to send text"}
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
                            name={"firstWorkingDay"}
                            type="date"
                            value={this.sendDateInString(this.state.firstWorkingDay)}
                            onChange={this.handleDateChange}
                            label={"Check date and month"}
                        />

                        <InputField
                            type={"checkbox"}
                            defaultChecked={this.props.defaultChecked}
                            label={"Check to send text"}
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