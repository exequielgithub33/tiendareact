// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection, addDoc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMmIeG2CMcvVS8Ogh9FYEL0_z0UFQc5lA",
  authDomain: "ecommercetkd.firebaseapp.com",
  projectId: "ecommercetkd",
  storageBucket: "ecommercetkd.appspot.com",
  messagingSenderId: "1018887651405",
  appId: "1:1018887651405:web:c4da6b92a7b54cde8adc04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()   // consulta a bd

export const cargarBDD =async()=> {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async(prod) => {
    await addDoc(collection(db,"productos"), {
       nombre: prod.nombre,
       modelo: prod.modelo,
       idCategoria: prod.idCategoria,
       stock:prod.stock,
       precio: prod.precio,
       img:prod.img

   })

  })
}

