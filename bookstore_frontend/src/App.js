// importing dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importing pages
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import UpdateBookPage from './pages/UpdateBook';
import AddOrUpdatePage from './pages/AddOrUpdatePage';

//importing components

// importing styles
import './App.css';

function App() {
  return (
    <>

    <Router>
      <Routes>

        <Route path="/" element={<HomePage/>}/><Route/>
        <Route path='/addorupdatebook' element={<AddOrUpdatePage/>}/><Route/>
        <Route path="/addbook" element={<AddBookPage/>}/><Route/>
        <Route path="/updatebook" element={<UpdateBookPage/>}/><Route/>

      </Routes>
    </Router>

    <footer>&copy; 2023 Joanna Getek</footer>
    </>
  );
}

export default App;
