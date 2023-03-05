import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {ItemList} from '../ItemList/ItemList'

import { getProductos } from '../../firebase/firebase';


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {nombre} =useParams()
    useEffect(() => {
      if (nombre) {
        getProductos()
        .then(items => {
          const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === nombre) 
          const productsList = <ItemList products ={products} plantilla ={'item'}/>
       
          setProductos(productsList)
         })


      } else {
        getProductos()
        .then(items => {
          const products = items.filter(prod => prod.stock > 0)
          const productsList = <ItemList products ={products} plantilla = {'item'}/>
        
          setProductos(productsList)
         })

      }
    
      

    }, [nombre]);


    return (
        <div className='row cardProductos'>
           {productos} 
        </div>
    );
}

 
