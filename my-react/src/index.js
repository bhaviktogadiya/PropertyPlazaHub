import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Apartment } from './pages/Apartment';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './components/About';
import Home from './pages/home';
import Plisting from './components/Plisting';
import Ptype from './components/ptype';
import Pagent from './components/Pagent';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';




const PrivateRoute = ({children }) => {
    const isAuthenticated = localStorage.getItem("token") ?? ""
    return isAuthenticated ? children : <Navigate to="/login" />;
  };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App />} />
                <Route path="/login" element={<Login />} />
                
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/propertylisting" element={<Plisting />} />
                <Route path="/propertytype" element={<Ptype />} />
                <Route path="/propertyagent" element={<Pagent />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/contactus" element={<ContactUs />} />
                
                <Route path='/Apartment/:id' element={<Apartment />} />

                <Route path='/user/dashboard' element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
                } 
                />
                <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
        </BrowserRouter>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

