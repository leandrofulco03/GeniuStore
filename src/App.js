import './App.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import NavBarBoost from './components/NavBar/NavBarBoost';
import Detail from './pages/Detail';
import ProductsList from './pages/ProductsList';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: false
    });
    sr.reveal(
      `
      
      .home_container
      `
    )
  }, [])

  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavBarBoost />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<ProductsList />} />
          <Route path='/product' element={<ProductsList />} />
          <Route path='/cart' element={<CartPage />} />
          <Route exact path='/products/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
