import React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../data/fireBaseConfig';
import ItemList from '../item/ItemList';

function ItemListContainer() {
  const [products, setProducts] = useState([]);

    const getProductsFromDB = async () => {
      const productSnapshot = await getDocs(collection(db, 'products'));
      const productList = productSnapshot.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });
      return productList;
  }

    useEffect(() => {
        getProductsFromDB()
        .then((response) => {
            setProducts(response)
        })
    }, [])

  return (
    <div>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;