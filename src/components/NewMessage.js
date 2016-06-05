import React from 'react';

export default class NewMessage extends React.Component {
    render(){
        return(
            <form action="#" onSubmit={(e) => {
            this.props.onNewMessage(
            document.getElementById('message').value
            );
            e.preventDefault();
            }}>
                <h3>Skriv en post</h3>
                <input id="message"
                       type="text"
                       placeholder="Skriv en melding her"
                       className="form-control"
                />
                <button className="btn btn-primary">Legg ut melding</button>
            </form>
        )
    }
}