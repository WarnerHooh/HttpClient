import request from 'request';
import HttpClient from "../../../lib/HttpClient";
import ArticleService from './ArticleService'

// globally setting
HttpClient.defaults = {
  http: request,
  baseUrl: 'http://www.request-http-client.com/'
};

export default ArticleService
