const queryParams = (params) => {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
};


export const fetchPayments = (filter) => {
    const url = '/filter?' + queryParams(filter);
    return fetch(url).then(res => res.json());
};


export const addPayment = (data) => {
    return fetch("/store", {
            method: "POST",
            body: data
        })
        .then(res => res.json())
        .then(res => !! res.errors ? Promise.reject(res) : Promise.resolve(res))
};
