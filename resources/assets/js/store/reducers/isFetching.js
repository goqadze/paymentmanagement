const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_PAYMENTS_REQUEST':
            return true;
        case 'FETCH_PAYMENTS_SUCCESS':
        case 'FETCH_PAYMENTS_FAILURE':
            return false;
        default:
            return state;
    }
};

export default isFetching;