import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Homepage from './views/Homepage';
import About from './views/About';
import Product from './views/Product';
import Contact from './views/Contact';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
