import HttpClient, { Path, POST, GET, Query, Body } from "../../../lib/HttpClient";

export default class ArticleService extends HttpClient {

  @GET('/articles/:category')
  fetchArticles(@Path('category') category, @Query('status') status) {
  }

  @POST('/articles')
  createArticle(@Body body) {
  }
}
