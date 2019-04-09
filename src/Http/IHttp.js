export const invalidError = new Error("Invalid ajax http client. axios/fetch/request supported");

export default class IHttp {
  constructor(http) {
    this.http = http;
  }

  request() {
    throw invalidError;
  }
}
