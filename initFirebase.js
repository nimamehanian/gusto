import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_API_KEY } from 'root/keys';

firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: 'gustoauth1111.web.app',
  projectId: 'gustoauth1111',
});

export default firebase;
