import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

function Detail() {

  let { id } = useParams();

  return (
    <div>
        <ItemDetailContainer id={id} />
    </div>
  )
}

export default Detail