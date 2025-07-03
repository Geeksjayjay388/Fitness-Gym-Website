import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Register from './pages/Register';
import Blog from "./pages/Blogs";
function App(){

  return(
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );

};
export default App;
