import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message"> Welcome {props.username} </h2>
    const loginPrompt = <h2 className="login-prompt">Login......</h2>
    
    return(props.isLoggedIn ? welcomeMessage : loginPrompt );
}

UserGreeting.prototypes ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting
