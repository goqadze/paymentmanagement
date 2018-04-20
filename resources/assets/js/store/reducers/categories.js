const categories = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return action.response.slice();
        default:
            return state;
    }
};

export default categories;
