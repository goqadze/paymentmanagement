const selectedCategory = (state = -1, action) => {
    switch (action.type) {
        case 'CATEGORY_CHANGED':
            return +action.category_id;
        default:
            return state;
    }
};

export default selectedCategory;