import {getStringifiedQuery, formatToCamelCase} from 'src/helper/helper';
import {HttpHeader, HttpMethod} from 'src/common/enums/enums';

class Http {
  load(url, options = {}) {
    const {
      method = HttpMethod.GET,
      payload = null,
      contentType,
      query,
    } = options;
    const headers = this._getHeaders({
      contentType,
    });

    return fetch(this._getUrl(url, query), {
      method,
      headers,
      body: payload,
    })
        .then(this._checkStatus)
        .then(this._parseJSON)
        .then(this._formatToCamelCase)
        .catch(this._throwError);
  }

  _getHeaders({contentType}) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  async _checkStatus(response) {
    if (!response.ok) {
      const parsedException = await response.json();

      throw new Error(parsedException?.message ?? response.statusText);
    }

    return response;
  }

  _getUrl(url, query) {
    return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`;
  }

  _parseJSON(response) {
    return response.json();
  }

  _formatToCamelCase(obj) {
    return formatToCamelCase(obj);
  }

  _throwError(err) {
    throw err;
  }
}

export {Http};
