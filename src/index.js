import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar/Navbar';
import './App.css';
import './styles/pages.css';
import Videobg from './Videobg';
import App from './App';
// import Snake from './components/Gamesnake/Snake';
import Cursor from './navbar/Cursor';
import Show_blogs from './blogs/Show_blogs';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <App />
        <Videobg />
        <Cursor/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/about-me" element={<About/>}></Route>
          <Route exact path="/my-skills" element={<Skills/>}></Route>
          {/* <Route exact path="/play-snake" element={<Snake/>}></Route> */}
            <Route exact path="/blogs" element={<Show_blogs />}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
