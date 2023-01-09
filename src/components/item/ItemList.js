import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';
import './Item.css';

function ItemList({products}) {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);

  return (
    <div className='card_list'>
      <Container>
          <Row className='d-flex justify-content-center'>
              {products.length ? (
                  <>
                  {products.map((item) => {
                    return (
                        <Col col={6} lg={3} md={6} sm={12} xs={12} className="mx-4 m-3" key={item.id}>
                        <Item 
                        image={item.image} 
                        title={item.title} 
                        description={item.description}
                        price={item.price}
                        stock={item.stock}
                        id={item.id}
                        />
                        </Col>
                    )
                })}
                </>

              ) : (
                <div className='loader d-flex justify-content-center align-items-center'>
                  <h1 loading={loading}>Loading...</h1>
                </div>
                
              )}
      </Row>
      </Container>
    </div>
  )
}

export default ItemList