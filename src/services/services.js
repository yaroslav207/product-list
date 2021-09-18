import {Http} from './http/http.service';
import {Comment} from './comment/comment.service';
import {ENV} from 'src/common/enums/enums';

const comment = new Comment({
  http: new Http(),
  apiPrefix: ENV.API_PATH,
});

export {comment};
