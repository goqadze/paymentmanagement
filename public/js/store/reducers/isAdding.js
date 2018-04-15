const isAdding = (state = false, action) => {
    switch (action.type) {
        case 'ADD_PAYMENTS_REQUEST':
            return true;
        case 'ADD_PAYMENTS_SUCCESS':
        case 'ADD_PAYMENTS_FAILURE':
            return false;
        default:
            return state;
    }
};

export default isAdding;