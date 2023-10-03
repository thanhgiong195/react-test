import './App.css';
import './assets/styles/style.scss';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Record from './pages/Record';
import Column from './pages/Column';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/record" element={<Record />} />
          <Route path="/column" element={<Column />} />
        </Routes>
      </main>

      <ScrollTop />

      <Footer />
    </>
  );
}

export default App;
