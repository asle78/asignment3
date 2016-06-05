export default (user= {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return Object.assign({}, {
                user: action.data
            },...user);
        case 'LOGOUT':
            return user;
        default:
            return user

    }
}