const queryParams = (params) => {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}


export const fetchPayments = (filter) => {
  const url = '/filter?' + queryParams(filter);
  return fetch(url);
};

export const addPayment = (newPayment) => {

};


