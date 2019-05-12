import IHttp from './IHttp'

export default class AxiosHttp extends IHttp{
  constructor(client) {
    super(client);
  }

  request({url, baseUrl, method, headers, data, credentials, ...rest}) {
    return this.client.request({
      url,
      method,
      data,
      headers,
      baseURL: baseUrl,
      withCredentials: !!credentials,
      ...rest
    });
  }
}
