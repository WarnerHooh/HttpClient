import axios from './axios';

import HttpClient, { Path, POST, GET, Query, Headers, Body } from "../../../lib/HttpClient";

export default class ArticleService extends HttpClient {
  constructor() {
    super(axios);
  }

  @GET('/articles/:category')
  @Headers({'X-TOKEN': 'SECURITY'})
  fetchArticles(@Path('category') category, @Query('status') status) {
  }

  @POST('/articles')
  createArticle(@Body body) {
  }
}
