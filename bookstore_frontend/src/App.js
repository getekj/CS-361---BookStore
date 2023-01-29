// importing dependencies
import React, { useState } from 'react';
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

  const [book, setBook] = useState([]);

  return (
    <>

    <Router>
      <Routes>

        <Route path="/" element={<HomePage/>}/><Route/>
        <Route path='/addorupdatebook' element={<AddOrUpdatePage book={book} setBook={setBook}/>}/><Route/>
        <Route path="/addbook" element={<AddBookPage book={book}/>}/><Route/>
        <Route path="/updatebook" element={<UpdateBookPage book={book}/>}/><Route/>

      </Routes>
    </Router>

    <footer>&copy; 2023 Joanna Getek</footer>
    </>
  );
}

export default App;
