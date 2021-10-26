import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import * as authFB from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBm5XCpk_-K2kJd-MOQDkwdHdd6RMPyUsw',
  authDomain: 'product-list-74c13.firebaseapp.com',
  projectId: 'product-list-74c13',
  storageBucket: 'product-list-74c13.appspot.com',
  messagingSenderId: '965091236563',
  appId: '1:965091236563:web:fba303d4c5f72f11d05226',
  measurementId: 'G-2LE2YYDJMW',
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db, app, authFB, storage};
