import IHttp from './IHttp'

export default class FetchHttp extends IHttp {
  constructor(client) {
    super(client);
  }

  request({ url, baseUrl, method, headers, data, ...rest }) {
    const realUrl = `${baseUrl || ''}${url}`;

    return this.client.bind(window)(realUrl, {
      method,
      body: data && JSON.stringify(data),
      headers,
      ...rest
    });
  }
}
