import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/item/ItemList';
// Firebase
import { collection, getDocs } from 'firebase/firestore';
import db from '../data/fireBaseConfig';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    const getProductsFromDB = async () => {
        const productSnapshot = await getDocs(collection(db, 'products'));
        const productList = productSnapshot.docs.map((doc) => {
          let product = doc.data();
          product.id = doc.id;
          return product;
        });
        return productList;
      }

        useEffect( () => {
            getProductsFromDB()
            .then((response) => {
                setProducts(category ? response.filter(product => product.category === category) : response);
            })
        }, [category])

  return (
    <div>
        <section className='products-container my-5'>
            <ItemList products={products}/>
        </section>
    </div>
  )
}

export default ProductsList;