var React = require('react');

import Login from './components/Login.js';
import Register from './components/Register.js';
import Messages from './components/Messages.js';
import NewMessage from './components/NewMessage.js';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.actions.getMessages();
    }

    render() {
        var {
            user
            } = this.props;
        if (user.user === undefined) {
            return (
                <div>
                    <Register onRegister={(username, password) => this.props.actions.registerUser(username, password)}/>
                    <Login onLogin={(username, password) => this.props.actions.loginUser(username, password)}/>
                </div>
            )
        } else {
            return (
                <div>
                    {JSON.stringify(user.user.username)}
                    <button onClick={this.props.actions.logoutUser}>Logg ut</button>
                    <NewMessage onNewMessage={(message) => this.props.actions.newMessage(message)}/>
                    <Messages actions={this.props.actions} message={this.props.message}/>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);