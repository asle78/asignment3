import React from 'react';
import Message from './Message'

export default class Messages extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Melding</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.message.map((message, index) => {
                    return <Message actions={this.props.actions} key={index} message={message}/>
                })}
                </tbody>
            </table>
        )
    }
}