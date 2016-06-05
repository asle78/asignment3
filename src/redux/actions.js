const actions = {

    registerUser(username, password) {
        return (dispatch) => {
            const user = {
                username,
                password
            };

            fetch('/insert', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
                .then('Inserted user + ' + username + ' with password: ' + password);
            dispatch(actions.setUser(user))
        }
    },
    loginUser(username, password) {
        const user = {
            username: username,
            password: password
        };
        return (dispatch) => {
            fetch('/autoriser', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
                .then(res => res.text())
            dispatch(actions.setUser(user));
        }
    },
    logoutUser(){
        return (dispatch) => {
            dispatch(actions.setUser(undefined))
        }
    },

    setUser(user) {
        return {
            type: 'SET_USER',
            data: user
        }
    },

    newMessage(message){
        return (dispatch) => {
            fetch('/new-message', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message
                })
            });
            dispatch(actions.setMessages(message))
        }
    },

    getMessages(){
        return (dispatch) => {
            fetch('/messages', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    json.forEach((messageInDb) => {
                        dispatch(actions.setMessages(messageInDb.message))
                    })
                })
        }
    },

    setMessages(message){
        console.log(message);
        return {
            type: 'SET_MESSAGES',
            message: message
        }
    },

    deleteMessage(message){
        return(dispatch) => {
            fetch('/delete-message', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message
                })
            });
            dispatch(actions.messageToBeDeleted(message))
        }
    },

    messageToBeDeleted(message){
        return {
            type: 'DELETE_MESSAGE',
            message: message
        }
    }
};

export default actions;