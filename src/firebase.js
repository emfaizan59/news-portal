import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

  var firebaseConfig = {
    apiKey: "AIzaSyCYvvbBkWZW8bghJS5eRVGbiMwRwQKdzYE",
    authDomain: "news-portal-cb94b.firebaseapp.com",
    databaseURL: "https://news-portal-cb94b.firebaseio.com",
    projectId: "news-portal-cb94b",
    storageBucket: "news-portal-cb94b.appspot.com",
    messagingSenderId: "179875334593",
    appId: "1:179875334593:web:9a93bd02f49114988e8740"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase