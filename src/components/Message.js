import React from 'react';

export default class Message extends React.Component {
    delete(){
        this.props.actions.deleteMessage(this.props.message.message)
    }
    render(){
        return(
            <tr>
                <td>{this.props.message.message}</td>
                <td><button onClick={this.delete.bind(this)}>slett melding</button></td>
            </tr>
        )
    }
}