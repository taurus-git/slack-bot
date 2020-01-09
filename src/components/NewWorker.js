import React, {Component} from 'react';
import {database} from './firebase';
import './SingleWorker.css';
/*import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'*/

class NewWorker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            surname: '',
            congratulationMessage: '',
            startDate: new Date(),
        };

        this.handleChange = this.handleChange.bind(this);
        /*this.handleSelect = this.handleSelect.bind(this);*/
        this.handleSubmit = this.handleSubmit.bind(this);

        this.dataRef = database.ref('/workers');
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleChangeDate = date => {
        this.setState({
            startDate: date
        })
    };

   /* handleSelect(event){
        console.log("Element Selected")
    }*/

    handleSubmit(event){
        event.preventDefault();
        /*this.dataRef
            .child(this.state.username)
            .child("name")
            .set(this.state.name)*/
        this.dataRef.push(this.state);
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

                   {/*<DatePicker
                       selected={this.state.date}
                       /*onSelect={this.handleSelect}*/
                       /*onChange={this.handleChangeDate}*/
                   /*/>*/}

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