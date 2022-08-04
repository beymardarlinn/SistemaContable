import app from "firebase/compat/app";
import firebaseConfig from "./config"; 
import 'firebase/compat/auth';
import Router from 'next/router';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    //registra un usuario
    async registrar(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email,password);

        return await nuevoUsuario.user.updateProfile({
            displayName : nombre
        })
    }

    //inicia sesion del usuario
    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }
    
    //cierra la sesion del usuario
    async cerrarSesion() {
        await this.auth.signOut();
        Router.push('/');
    }

}

const firebase = new Firebase();
export default firebase;

