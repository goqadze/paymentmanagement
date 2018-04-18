const paymentsCurrentYear = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CURRENT_YEAR_PAYMENTS_SUCCESS':
            return action.response.slice();
        default:
            return state;
    }
};

export default paymentsCurrentYear;
