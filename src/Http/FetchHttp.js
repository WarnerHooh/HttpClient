import IHttp from './IHttp'

export default class FetchHttp extends IHttp {
  constructor(http) {
    super(http);
  }

  request({ url, method, headers, data, responseType, credentials }) {
    console.log('fetch impl');

    return this.http.bind(window)(url, {
      method,
      body: data,
      headers,
      // TODO refactor
      credentials: credentials ? 'include' : 'omit',
    });
  }
}
