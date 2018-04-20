const paymentsCurrentYear = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CURRENT_YEAR_PAYMENTS_SUCCESS':
            return action.response.slice();
        case 'ADD_PAYMENT_SUCCESS':
            return new Date(action.response.created_at).getFullYear() === new Date().getFullYear()
                ? [...state, action.response]
                : state;
        default:
            return state;
    }
};

export default paymentsCurrentYear;
