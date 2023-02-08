import './App.css';
import Navbar from './components/Navbar/Navbar'
 import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />  
        <Route path='/item/:id' element={<ItemDetailContainer/>} /> 
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} /> 
     
      </Routes>
      
    </BrowserRouter>
     
    </>
  );
}

export default App;
