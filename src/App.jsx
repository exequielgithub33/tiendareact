import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

import {CarritoProvider} from './context/CarritoContext';
import Navbar from './components/Navbar/Navbar';
import {Contacto} from './components/Contacto/Contacto';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



import {Cart} from './components/Cart/Cart'

import {cargarBDD} from './firebase/firebase.js'
import {getProductos} from './firebase/firebase.js'

import {Checkout} from './components/Checkout/Checkout'


const App = () => {
 
 return (
    <>
    
    <BrowserRouter>
    <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />  
          <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
          <Route path='/categoria/:nombre' element={<ItemListContainer/>} /> 
          <Route path='/cart' element={<Cart/>} /> 
          <Route path='/contacto' element={<Contacto/>} /> 
          <Route path='/checkout' element={<Checkout/>} /> 
        </Routes>
        <ToastContainer/>
        </CarritoProvider>
    </BrowserRouter> 
   
     
    </>
  );
}

export default App;
