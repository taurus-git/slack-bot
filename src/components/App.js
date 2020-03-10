import React from 'react';
import { auth, database } from './firebase';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import Workers from './Workers';
import NewWorker from './NewWorker';
import NewEvent from "./NewEvent";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            newData: '',
            currentUser: null,
            workers: [],
        };

        this.dataRef = database.collection('/workers');
    }

    componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
            this.setState({ currentUser });
        });

        //TODO: Change this request because we don't have live upload when we add new worker
        var dbWorkers = this.dataRef;
        var allWorkers = dbWorkers
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let worker = {
                        id: doc.id,
                        username: doc.data().username,
                        name: doc.data().name,
                        surname: doc.data().surname,
                        birthdayMessage: doc.data().birthdayMessage,
                        anniversaryMessage: doc.data().anniversaryMessage,
                    };

                    this.setState( {workers : [...this.state.workers, worker] });
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }

    render() {
        const { currentUser, workers } = this.state;

        return (
            <div>
                {!currentUser && <SignIn />}
                {
                    currentUser &&
                    <div>
                        <NewEvent />
                        <NewWorker />
                        <CurrentUser user={currentUser} />
                        <hr/>
                        <Workers workers={workers} />
                    </div>
                }
            </div>
        );
    }
}

export default App;