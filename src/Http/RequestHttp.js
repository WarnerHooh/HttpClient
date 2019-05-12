import IHttp from './IHttp'

export default class RequestHttp extends IHttp{
  constructor(client) {
    super(client);
  }

  request({url, method, headers, data, ...rest}) {
    console.log('request impl')
    return new Promise((resolve, reject) => {
      this.client({
        url,
        method,
        body: data && JSON.stringify(data),
        headers,
        ...rest
      }, function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  }
}
