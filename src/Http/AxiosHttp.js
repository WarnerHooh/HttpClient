import IHttp from './IHttp'

export default class AxiosHttp extends IHttp{
  constructor(http) {
    super(http);
  }

  request({url, method, headers, data, responseType, credentials}) {
    console.log('axios impl');

    return this.http.request({
      url,
      method,
      data,
      headers,
      responseType,
      withCredentials: credentials,
    });
  }
}
