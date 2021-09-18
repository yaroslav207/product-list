import {HttpMethod, ContentType} from 'src/common/enums/enums';

class Comment {
  constructor({http, apiPrefix}) {
    this._http = http;
    this._apiPrefix = apiPrefix;
  }

  getCommentsByQuery(query) {
    return this._http.load(`${this._apiPrefix}/comments`, {
      method: HttpMethod.GET,
      query: query,
    });
  }

  addComment(payload) {
    return this._http.load(`${this._apiPrefix}/comments`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }
}

export {Comment};
