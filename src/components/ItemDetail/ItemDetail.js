import React, { useState, useContext } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({item}) {
  const initial = 1;
  const [showButton, setShowButton] = useState(false);
  const {addProductToCart, addItem} = useContext(CartContext);

  const addToCart = (count) => {
    addProductToCart(item);
    addItem(item, count);
    setShowButton(true);
}

  return (
    <Container className='my-5'>
        <Row className='d-flex justify-content-around'>
            <Col xl={5} lg={5} md={12} sm={12} className="product_detail m-1" key={item.id}>
            <h2>{item.title}</h2>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="Product"
                />
              </Carousel.Item>
            </Carousel>
            </Col>
            <Col xl={5} lg={5} md={8} sm={8} className="item-description d-flex flex-column my-5">
              <p className='item_detail_price'>${item.price}</p>
              <p className='text_danger'><i class="fa-solid fa-circle-exclamation"></i> Limited supply at this price</p>
              <p className='credit_promo'><img src='/img/creditcard.svg' alt='creditcard' width={40} /><a href='#me'>6 Month Promo Financing Available</a></p>
              <p>
                {item.description}
                </p>
                <div className='buy_section'>
                  {showButton === false ?
                  <ItemCount 
                    initial={initial}
                    onAdd={addToCart}
                    stock={item.stock}
                  />
                :
                <Button className='mx-1 my-2 btn_primary'><Link to='/cart' className='btn_primary'>Finish Order</Link></Button>}
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ItemDetail;