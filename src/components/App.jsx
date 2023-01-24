import './App.css';
import Navbar from './Navbar/Navbar';

import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido A la tienda Taekwondo Parana"/>
      <ItemCount valorInicial={1} stock={8}/>
    </>
  );
}

export default App;
