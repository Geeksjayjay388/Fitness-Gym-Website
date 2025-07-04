import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Store from "./pages/Store";       // This will receive props
import Login from "./pages/Login";
import Register from './pages/Register';
import Blog from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";         // Make sure this exists too!

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (item) => {
    const exists = cartItems.find(i => i.id === item.id);
    if (exists) {
      const updated = cartItems.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setCartCount(prev => prev + 1);
    toast.success(`${item.name} added to cart`, {
  icon: '🛍️',
});

  };

  const adjustQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
    setCartCount(prev => prev + delta);
  };

  return (
    <main>
      <Router>
        <Navbar cartCount={cartCount} />
        <Toaster position="bottom-right" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={
              <Store
                handleAddToCart={handleAddToCart}
                cartCount={cartCount}
              />
            }
          />
          <Route path="/cart" element={
            <Cart
              cartItems={cartItems}
              cartCount={cartCount}
              adjustQuantity={adjustQuantity}
            />
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
