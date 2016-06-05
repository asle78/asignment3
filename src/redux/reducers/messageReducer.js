export default (messages = {}, action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return [{
                message: action.message
            },...messages];
        case 'DELETE_MESSAGE' :
            return messages.filter((message) => {
                return message.message !== action.message
            });
        default:
            return messages

    }
}