const firebase = require('firebase/app');
require('firebase/firestore');

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'ksu-barrow.firebaseapp.com',
    databaseURL: 'https://ksu-barrow.firebaseio.com',
    projectId: 'ksu-barrow',
    storageBucket: '',
    messagingSenderId: '130077108360'
};

firebase.initializeApp(config);

const db = firebase.firestore();
module.exports = db.collection('stocks');
