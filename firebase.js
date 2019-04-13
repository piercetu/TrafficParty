import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDmbSOu8cxCTe4qvhoxLIwefqKiPOYPRP0",
    authDomain: "traffic-party.firebaseapp.com",
    databaseURL: "https://traffic-party.firebaseio.com",
    projectId: "traffic-party",
    storageBucket: "traffic-party.appspot.com",
    messagingSenderId: "240283101713"
  };

firebase.initializeApp(config);

const db = firebase.firestore();

export const { firebase, db };