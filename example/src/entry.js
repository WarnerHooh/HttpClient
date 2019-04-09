import 'whatwg-fetch';
import axios from 'axios';
import request from 'request';

import HttpClient, { Path, POST, Query } from "../../lib/HttpClient";

console.log(axios);
console.log(fetch);
console.log(request);

// TODO baseurl for all clients
axios.defaults.baseURL = 'http://www.a.com/aaa';

// HttpClient.defaults.http = axios;

class EntryService extends HttpClient {
  constructor(http) {
    super(http);
  }

  @POST('/apost/:id')
  testpost(@Path('id') id, @Query('type') type) {
    return null;
  }
}

const entryService = new EntryService(axios);
entryService.testpost(100, 'active');
