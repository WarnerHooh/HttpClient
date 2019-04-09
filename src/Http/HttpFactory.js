import FetchHttp from "./FetchHttp";
import AxiosHttp from "./AxiosHttp";
import RequestHttp from "./RequestHttp";
import IHttp, { invalidError } from "./IHttp";

let client = null;

export default class HttpFactory {

  static resolve(http) {
    if (!client) {
      if (typeof http !== 'function') {
        throw invalidError;
      }

      const name = http.name;
      switch (name) {
        case 'fetch':
          client = new FetchHttp(http);
          break;
        case 'wrap':
          client = new AxiosHttp(http);
          break;
        case 'request':
          client = new RequestHttp(http);
          break;
        default:
          client = new IHttp(http);
      }
    }

    return client;
  }
}
