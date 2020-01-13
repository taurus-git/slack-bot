import React, {Component} from 'react';
import {database} from './firebase';
import './SingleWorker.css';

class NewWorker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            surname: '',
            bday: '',
            firstWorkingDay: '',
            congratulationMessage: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.dataRef = database.collection('/workers');
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleDateChange(event){
        event.preventDefault();
        const timestamp = new Date(event.target.value);

        this.setState({
            [event.target.name]: timestamp
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.dataRef.doc().set(this.state)
    }

    render() {
        return (
           <div>
               <h2>Add new worker:</h2>
               <form onSubmit={this.handleSubmit} className="SingleWorker">
                   <label>
                       Username in Slack:
                       <input
                           name={"username"}
                           type="text"
                           value={this.state.username}
                           onChange={this.handleChange}
                           placeholder={"place for Slack username"}
                       />
                   </label>
                   <label>
                       Name:
                       <input
                           name={"name"}
                           type='text'
                           value={this.state.name}
                           onChange={this.handleChange}
                           placeholder={"workers's name"}
                       />
                   </label>
                   <label>
                       Surname:
                       <input
                           name={"surname"}
                           type='text'
                           value={this.state.surname}
                           onChange={this.handleChange}
                           placeholder={"workers's surname"}
                       />
                   </label>
                   <label>
                       Worker's Birth Day date:
                       <input
                           name={"bday"}
                           type="date"
                           value={this.state.bday}
                           onChange={this.handleDateChange}
                       />
                   </label>
                   <label>
                       Worker's First Day at Hyperion:
                       <input
                           name={"firstWorkingDay"}
                           type="date"
                           value={this.state.firstWorkingDay}
                           onChange={this.handleDateChange}
                       />
                   </label>
                   <textarea
                       name={"congratulationMessage"}
                       value={this.state.textarea}
                       onChange={this.handleChange}
                       placeholder={"congratulation text"}
                       cols="30"
                       rows="10"
                   >
                   </textarea>
                   <input type='submit' />
               </form>
           </div>
        )
    }
}

export default NewWorker;