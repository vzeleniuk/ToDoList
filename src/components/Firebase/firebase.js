import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyCajmEybdBSdFEb6PftF-npUyEi--jeGGY",
  authDomain: "my-test-project-d3e4d.firebaseapp.com",
  databaseURL: "https://my-test-project-d3e4d.firebaseio.com",
  projectId: "my-test-project-d3e4d",
  storageBucket: "my-test-project-d3e4d.appspot.com",
  messagingSenderId: "416103293547"
};
  const app = firebase.initializeApp(config);
  export const  db = app.database();
  const base = Rebase.createClass(db);

export { base }