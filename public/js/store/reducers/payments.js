const payments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PAYMENT_SUCCESS':
            return [...state, action.response];
        case 'FETCH_PAYMENTS_SUCCESS':
            return action.response.slice();
        default:
            return state;
    }
};

export default payments;
