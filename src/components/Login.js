import React from 'react';

export default class Login extends React.Component {
    render(){
        return(
            <form action="#" onSubmit={(e) => {
            this.props.onLogin(
            document.getElementById('login-name').value,
            document.getElementById('login-pass').value
            );
            e.preventDefault();
            }}>
                <h3>Logg inn</h3>
                <input id="login-name"
                       type="text"
                       placeholder="username"
                       className="form-control"
                />
                <input id="login-pass"
                       type="text"
                       placeholder="password"
                       className="form-control"
                />
                <button className="btn btn-primary">Logg inn</button>
            </form>
        )
    }
}
