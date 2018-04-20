const errorMessages = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PAYMENT_FAILURE':
            return action.errors;
        default:
            return state
    }
};

export default errorMessages;