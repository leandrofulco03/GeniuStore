import React from 'react';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../data/fireBaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer({id}) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

    const getProductFromDB = async () => {
      const docRef = doc(db, "products" , id);
      const docSnaptshot = await getDoc(docRef);
          let product = docSnaptshot.data();
          product.id = docSnaptshot.id;
          return product;
    }

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000)
    }, []);

  useEffect(() => {
    getProductFromDB()
          .then((res) => {
              setProduct(res);
          })
  }, [id]);
  return (
    <section className='d-flex justify-content-center align-items-center'>
      {product ? 
      <ItemDetail 
        item={product} 
      /> 
      : 
      <h1 loading={loading}>Loading...</h1>}
    </section>
  )
}

export default ItemDetailContainer;