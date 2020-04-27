import "@babel/polyfill"
import React from 'react'
import {render} from 'react-dom'
import firebase from 'firebase'
import './index.css'
import App from './App'

firebase.initializeApp({
    apiKey: "AIzaSyDDGwkGJW7tryGAM6t8nkt5FxiEZkkY3So",
    authDomain: "pseudogram-a72cf.firebaseapp.com",
    databaseURL: "https://pseudogram-a72cf.firebaseio.com",
    projectId: "pseudogram-a72cf",
    storageBucket: "pseudogram-a72cf.appspot.com",
    messagingSenderId: "44396913866",
    appId: "1:44396913866:web:c1985ae39b679233500033"
});

render(<App/>, document.getElementById('root'));