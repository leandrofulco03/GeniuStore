import React from 'react';
import { Button } from 'react-bootstrap';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import './Home.css';

function Home() {
  return (
    <section className='home_container'>
        <div className='home_banner'>
          <div className='home_banner_desc'>
            <h6>25% OFF PROMOTIONAL SALE</h6>
            <h1>All you need is in Genius.</h1>
            <p>Integer consectetur ex at cursus auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed.</p>
            <Button className='btn_primary'>Browse Products</Button>
          </div>
          <div className='home_banner_img'>
            <img src='/img/cooking-pan.svg' alt='banner'/>
          </div>
        </div>
        <div className='home_products'>
          <h1>Recent Products</h1>
          <ItemListContainer />
        </div>

        <div className='category_section'>
          <div className='category_title'>
            <h1>A different kind of Store</h1>
            <p>Aenean luctus magna ut iaculis feugiat. Pellentesque laoreet tempus malesuada. Morbi nec vestibulum tellus, ut egestas leo. Morbi sit amet erat suscipit.</p>
            <Button className='btn_primary'>Buy Now</Button>
          </div>
          <div className='category_icons'>
            <div className='cart_icon my-3'>
              <div>
                <h1><i class="fa-solid fa-cart-plus"></i></h1>
              </div>
              <div>
                <h5 className='my-2'>You order recieve</h5>
                <p>Pre order your products online</p>
              </div>
            </div>
            <div className='assist_icon my-3'>
              <div>
                <h1><i class="fa-solid fa-clipboard-question"></i></h1>
              </div>
              <div>
                <h5 className='my-2'>Assistant Contact</h5>
                <p>A personal assistant to manage your order</p>
              </div>  
            </div>
            <div className='delivery_icon my-3'>
              <div>
                <h1><i class="fa-solid fa-truck"></i></h1>
              </div>
              <div>
                <h5 className='my-2'>Order Delivery</h5>
                <p>We deliver the products to your door</p>
              </div>
            </div>
          </div>
        </div>

        <div className='promotion my-5'>
            <h1><span>25% OFF </span>PROMOTIONAL SALE</h1>
            <h3>Take advantage of 25% off in the following categories</h3>
            <div className='category_prom my-5'>
              <div>
                <i class="fa-solid fa-tv"></i>
                <h3>Technology</h3>
              </div>
              <div>
                <i class="fa-solid fa-shirt"></i>
                <h3>Clothes</h3>
              </div>
              <div>
                <i class="fa-solid fa-kitchen-set"></i>
                <h3>Kitchen</h3>
              </div>
            </div>
        </div>

        <div className='email_promo'>
          <i class="fa-solid fa-envelope"></i>
          <h1>Get On The List</h1>
          <p>Shop Exclusive Promos & Save 20% on Your First Order</p>
          <div>
            <input type="email" placeholder='Your Email Here' />
            <Button className='btn_primary'>Suscribe</Button>
          </div>
          <p>By entering your email you are accepting our <span>Terms of Use</span> and <span>Privacy Policy</span></p>
        </div>
    </section>
  )
}

export default Home;