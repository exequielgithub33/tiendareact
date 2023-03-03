import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {cargarBDD} from './firebase/firebase.js'


import {Cart} from './components/Cart/Cart'



const App = () => {
 // cargarBDD()      se carga en la base de datos los prodcutos sacados del JSON SE EJECUTA  UNA vez
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />  
        <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
      </Routes>
      <ToastContainer/>
    </BrowserRouter> 

     
    </>
  );
}

export default App;
