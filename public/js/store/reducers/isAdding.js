const isAdding = (state = false, action) => {
    switch (action.type) {
        case 'ADD_PAYMENT_REQUEST':
            return true;
        case 'ADD_PAYMENT_SUCCESS':
        case 'ADD_PAYMENT_FAILURE':
            return false;
        default:
            return state;
    }
};

export default isAdding;