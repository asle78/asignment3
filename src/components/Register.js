import React from 'react';

export default class Register extends React.Component {
    render(){
        return(
            <form action="#" onSubmit={(e) => {
            this.props.onRegister(
            document.getElementById('register-name').value,
            document.getElementById('register-pass').value
            );
            e.preventDefault();
            }}>
                <h3>Registrer deg</h3>
                <input id="register-name"
                       type="text"
                       placeholder="username"
                       className="form-control"
                />
                <input id="register-pass"
                       type="text"
                       placeholder="password"
                       className="form-control"
                />
                <button className="btn btn-primary">Registrer</button>
            </form>
        )
    }
}