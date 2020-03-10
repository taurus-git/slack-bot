import React, {Component} from "react";
import {database} from './firebase';
import InputField from "./form_fields/InputField";
import Textarea from "./form_fields/Textarea";

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventDate: '',
            anniversaryMessage: '',
            birthdayMessage: '',
        };

        this.dataEventsRef = database.collection('/events');
    }

    handleDateChange = event => {
        event.preventDefault();
        const timestamp = new Date(event.target.value);

        this.setState( {
            [event.target.name]: timestamp
        } )
    };

    handleSubmit = event => {
        event.preventDefault();
        this.dataEventsRef.doc().set(this.state)
    };

    sendDateInString = date => {
        let dateString = date;
    };

    render() {
        return (
            <div>
                <h1>Add new event</h1>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Event info:</legend>
                        <InputField
                            name={"eventDate"}
                            type={"date"}
                            value={this.sendDateInString(this.state.eventDate)}
                            onChange={this.handleDateChange}
                            label={"Fill up the date"}
                        />
                    </fieldset>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default NewEvent;