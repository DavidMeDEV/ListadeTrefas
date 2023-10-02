
import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/auth'


const firebaseApp = {
    apiKey: "AIzaSyCfn5JDVXaHGQTXX803IUpVgHq0as8ihCU",
    authDomain: "lista-de-tarefas-cfe48.firebaseapp.com",
    databaseURL: "https://lista-de-tarefas-cfe48-default-rtdb.firebaseio.com",
    projectId: "lista-de-tarefas-cfe48",
    storageBucket: "lista-de-tarefas-cfe48.appspot.com",
    messagingSenderId: "201459912002",
    appId: "1:201459912002:web:fdf086c5bf4c9f4dcf8cdb",
    measurementId: "G-SY3LJ00VYQ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseApp)
}
export default firebase