import request from 'request';

export const requestApi = (url, method, form) =>
  new Promise((resolve) =>
    request({
      url,
      method,
      rejectUnauthorized: false,
      form,
    }, (err, result, resultBody) => {
      if (err) throw err;
      else return resolve(JSON.parse(resultBody));
    }));
