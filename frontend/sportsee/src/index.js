import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Profil from './views/Profil'
import LeftPanel from './components/LeftPanel'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <LeftPanel />
      <Outlet />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="profil" element={<Profil />}  />
        </Route>
      </Routes>
    </Router> 
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
