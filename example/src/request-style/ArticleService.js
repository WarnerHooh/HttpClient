import HttpClient, { Path, POST, GET, Query, Body, Controller } from "../../../lib/HttpClient";

@Controller('/articles')
export default class ArticleService extends HttpClient {

  @GET('/:category')
  fetchArticles(@Path('category') category, @Query('status') status) {
  }

  @POST()
  createArticle(@Body body) {
  }
}
