import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig={apiKey:'AIzaSyDkVE25g2PPGxxtjX-nyOyBtlNXjOqfXSE',authDomain:'shikshaupdate-admin-4eddc.firebaseapp.com',projectId:'shikshaupdate-admin-4eddc',storageBucket:'shikshaupdate-admin-4eddc.firebasestorage.app',messagingSenderId:'606631771948',appId:'1:606631771948:web:10359794d84c843d95b689'};
const app=initializeApp(firebaseConfig);export const auth=getAuth(app);export const provider=new GoogleAuthProvider();