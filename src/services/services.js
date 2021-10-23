import {db, authFB} from '../firebase';
import {Notification} from './notification/notification.service';
import {Collection} from './collection/collection.service';
import {Auth} from './auth/auth.service';

const notification = new Notification();

const auth = new Auth({authFB});

const product = new Collection({
  db,
  collectionName: 'product',
});

export {notification, auth, product};
