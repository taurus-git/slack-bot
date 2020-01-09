import React, { PropTypes } from "react";
import { auth } from './firebase';

const CurrentUser  = ({ user }) => {
    return (
        <div>
            <h4>You are logged as:</h4>

            <p><strong>{ user.displayName }</strong></p>
            <img
                src={ user.photoURL }
                alt={ user.displayName }
                width={50}
            />
            <span>{ user.email }</span>
            <div>
                <button onClick={ () => auth.signOut() }>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

CurrentUser.propTypes = {
    user: PropTypes.shape({
        displayName: PropTypes.string,
        email: PropTypes.string.isRequired,
        photoURL: PropTypes.string,
        uid: PropTypes.string.isRequired
    })
};

export default CurrentUser;