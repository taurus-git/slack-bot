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
            workers: null,
        };

        this.dataRef = database.ref('/workers');
    }

    componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
            this.setState({ currentUser });

            this.dataRef.on('value', (snapshot) => {
                this.setState({ workers:  snapshot.val() });
            });
        });

        this.dataRef.on('value', (snapshot) => {
           this.setState({
               data: snapshot.val()
           });
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

                        {/*<h2>Workers list</h2>
                        <pre>
                            { JSON.stringify(this.state.data, null , 2) }
                        </pre>*/}
                    </div>
                }
            </div>
        );
    }
}

export default App;