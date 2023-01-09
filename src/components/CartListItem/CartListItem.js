import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, FloatingLabel, Form, Card, Alert } from 'react-bootstrap';
import CartContext from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../data/fireBaseConfig';
import './CartListItem.css'

function CartListItem() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const cartContext = useContext(CartContext);
  const {cartListItems, removeItemById, removeCart, totalPrice} = cartContext;
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map(product => {
      return {
        id: product.id,
        title: product.title,
        price: product.price
      }
    }),
    total: totalPrice
  });
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  const getCurrentDate = (separator=' ') => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${hour}:${minutes}`
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitOrder = () => {
      setOrder({...order, buyer: formValue});
      saveData({...order, buyer: formValue});
    }

    const handleChange = (e) => {   
      setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const saveData = async (newOrder) => {
      const orderFromFirebase = collection(db, 'orders');
      const orderDoc = await addDoc(orderFromFirebase, newOrder)
      setSuccess(orderDoc.id);
      removeCart();
    }

    const finishOrder = () => {
      navigate('/')
    }

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000)
    }, []);

  return (
    <section className="list-cart-container d-flex flex-column align-items-center">
            {cartListItems ? (cartListItems.map(product => {
                return( <CartItem key={product.id} 
                                  item={product} 
                                  removeItemById={removeItemById} 
                        /> );
                }))
                  : <h2 loading={loading}>Loading</h2>
            }
            <div className='total-price-cart d-flex flex-column align-items-center text-center p-5'>
              <h3>Total</h3>
              <span>${totalPrice}</span>
            </div>
            {cartListItems.length ? (<div className='d-flex flex-column justify-content-center align-items-center'>
                                      <Button
                                        className="button-primary button-padding btn_secondary"
                                        onClick={removeCart}
                                        >Remove Cart
                                      </Button>
                                      <Button 
                                      className='btn_primary mx-1 my-2'
                                      >
                                      <Link to='/cart' 
                                      className='link-light'
                                      onClick={handleShow}
                                      >Finish Order
                                      </Link>
                                      </Button>
                                    </div>
                      )
                         : <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                              <p>Cart Empty</p>
                              <Button variant='light'><Link to="/product">Start Buying</Link></Button>
                            </div>
            }
            <Modal show={show} onHide={handleClose}>
              {success ? (
                <Card>
                <Card.Header>Sucess!</Card.Header>
                <Card.Body>
                  <Card.Title>Order ID</Card.Title>
                  <Card.Text>
                    {success}
                  </Card.Text>
                  <Card.Text>
                    <h6>Purchase Date</h6>
                    {getCurrentDate()}
                  </Card.Text>
                  <Button variant="primary" onClick={finishOrder}>Finish</Button>
                </Card.Body>
              </Card>
              ) : (
                <div>
                <Modal.Header closeButton>
                <Modal.Title>Contact Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleSubmit(submitOrder)}>
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name='name' 
                    {...register('name', {required: true})} 
                    value={formValue.name} 
                    onChange={handleChange} 
                  />
                  {errors.name && <Alert className='my-1' variant='danger'>Cannot be empty</Alert>}
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name='phone' 
                    {...register('phone', {required: true, minLength: 10})} 
                    value={formValue.phone} 
                    onChange={handleChange} 
                  />
                  <div className='d-flex flex-column'>
                  {errors.phone && <Alert className='my-1' variant='danger'>Cannot be empty</Alert>}
                  {errors.phone && <Alert className='my-1' variant='danger'>Must have more than 10 characters</Alert>}
                  </div>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                  <Form.Control 
                    type="email" 
                    name='email' 
                    {...register('email', {required: true})} 
                    value={formValue.email} 
                    onChange={handleChange} 
                  />
                  {errors.email && <Alert className='my-1' variant='danger'>Cannot be empty</Alert>}
                </FloatingLabel>
                <Modal.Footer>
                <Button type="submit" className='btn_primary'>
                  Send
                </Button>
                </Modal.Footer>
                </form>   
              </Modal.Body>
              </div>
              )}
            </Modal>
        </section>
  )
}

export default CartListItem;