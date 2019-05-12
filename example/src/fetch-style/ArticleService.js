import FetchHttpClient from "./FetchHttpClient";
import { Body, GET, Headers, Path, POST, Query } from "../../../lib/HttpClient";

export default class ArticleService extends FetchHttpClient {

  @GET('/articles/:category')
  @Headers({'X-TOKEN': 'oooo'})
  fetchArticles(@Path('category') category, @Query('status') status) {
  }

  @POST('/articles')
  createArticle(@Body body) {
  }

}
