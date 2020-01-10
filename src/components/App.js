import React from 'react';
import { auth, database } from './firebase';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import Workers from './Workers';
import NewWorker from './NewWorker';

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
        var db = this.dataRef;
        var allWorkers = db
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    this.setState({ workers : [...this.state.workers, doc.data()]} );
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