import {db, authFB, storage} from '../firebase';
import {Notification} from './notification/notification.service';
import {Auth} from './auth/auth.service';
import {FileStorage} from './file-storage/file-storage.service';
import {Collection} from './collection/collection.service';

const notification = new Notification();

const auth = new Auth({authFB});

const fileStorage = new FileStorage({storage});

const product = new Collection({
  db,
  collectionName: 'product',
});

export {notification, auth, product, fileStorage};
