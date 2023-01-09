import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../ItemDetail/ItemDetail.css';

function ItemCount({stock, onAdd, initial}) {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if (count > initial) {
          setCount(count - 1)
        }
      }

  return (
    <div>
        <h6>Available Stock: {stock}</h6>
    <div className='count-item'>
      <div className='d-flex mx-2'>
        <Button onClick={removeCount} className='btn_secondary'>-</Button>
        <p>{count}</p>
        <Button onClick={addCount} className='btn_secondary'>+</Button>
      </div>
      <div>
        <Button className='btn_primary px-5' onClick={() => onAdd(count)}>Buy</Button>
      </div>
    </div>

    </div>
  )
}

export default ItemCount;