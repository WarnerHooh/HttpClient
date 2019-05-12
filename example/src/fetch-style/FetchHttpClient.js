import HttpClient from "../../../lib/HttpClient";

// The base custom HttpClient to set requests are via 'fetch' with given baseUrl
export default class FetchHttpClient extends HttpClient {
  constructor() {
    super(fetch);
  }

  getBaseUrl() {
    return 'http://www.fetch-http-client.com/'
  }
}
