import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const fbConfig = {
  apiKey: "AIzaSyCajmEybdBSdFEb6PftF-npUyEi--jeGGY",
  authDomain: "my-test-project-d3e4d.firebaseapp.com",
  databaseURL: "https://my-test-project-d3e4d.firebaseio.com",
  projectId: "my-test-project-d3e4d",
  storageBucket: "my-test-project-d3e4d.appspot.com",
  messagingSenderId: "416103293547"
};
  const fbConfigApp = firebase.initializeApp(fbConfig);
  const databaseRef = firebase.database().ref();
  export const db = fbConfigApp.database();

export { databaseRef };
export default fbConfigApp;
