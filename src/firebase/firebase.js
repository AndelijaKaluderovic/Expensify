import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCy5oBUUYXJme964bg8a-C5458b15WknNY",
    authDomain: "expensify-app-342ef.firebaseapp.com",
    databaseURL: "https://expensify-app-342ef-default-rtdb.firebaseio.com",
    projectId: "expensify-app-342ef",
    storageBucket: "expensify-app-342ef.appspot.com",
    messagingSenderId: "861061885339",
    appId: "1:861061885339:web:6938cbc1764f16dd5cc53e",
    measurementId: "G-PSX43P9DJ0"
  };
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { firebase, database as default };
  
  