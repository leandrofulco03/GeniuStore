import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

function Item(item) {
  return (
        <Card style={{ width: '18rem' }} className='card'>
          <div className='product-image'>
            <Card.Img src={item.image} variant="top" alt={item.title} />
          </div>      
            <Card.Body className='d-flex flex-column justify-content-center'>
                <Card.Title className='card_title'>{item.title}</Card.Title>
                <Card.Text className="card_text">
                    <p className='card_price'>${item.price}</p>
                    <p className='card_stock'>{item.stock} availible in stock</p>
                    <Link to={`/products/${item.id}`}><Button className='btn_primary'>View More</Button></Link>
                </Card.Text>
            </Card.Body>
        </Card>
  )
}

export default Item;