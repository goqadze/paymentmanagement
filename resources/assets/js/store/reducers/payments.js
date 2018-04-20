const payments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PAYMENT_SUCCESS':
            return [...state, action.response].sort((a, b) => {
                return a.created_at < b.created_at ? 1 : -1;
            });
        case 'FETCH_PAYMENTS_SUCCESS':
            return action.response.slice();
        default:
            return state;
    }
};

export default payments;
