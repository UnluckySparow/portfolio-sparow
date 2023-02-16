import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar/Navbar';
import './App.css';
import './styles/pages.css';
import Videobg from './Videobg';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <App />
        <Videobg />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/about-me" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
