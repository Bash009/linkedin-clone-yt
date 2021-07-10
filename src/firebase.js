import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCGKvZ4MV6bjTiDuClmm2oSGyiALmKI5CU',
  authDomain: 'graphic-jet-308814.firebaseapp.com',
  projectId: 'graphic-jet-308814',
  storageBucket: 'graphic-jet-308814.appspot.com',
  messagingSenderId: '856141913868',
  appId: '1:856141913868:web:39034c59154b600163b329',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
