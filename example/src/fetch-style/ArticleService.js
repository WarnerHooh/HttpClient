import FetchHttpClient from "./FetchHttpClient";
import { Body, GET, Headers, Path, POST, Query, Controller } from "../../../lib/HttpClient";

@Controller('/articles')
export default class ArticleService extends FetchHttpClient {

  @GET('/:category')
  @Headers({'X-TOKEN': 'oooo'})
  fetchArticles(@Path('category') category, @Query('status') status) {
  }

  @POST()
  createArticle(@Body body) {
  }

}
