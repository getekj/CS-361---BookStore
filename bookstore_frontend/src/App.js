// importing dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//importing pages
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import UpdateBookPage from './pages/UpdateBookPage';
import AddOrUpdatePage from './pages/AddOrUpdatePage';
import ActivityPage from './pages/ActivityPage';
import ViewTablePage from './pages/ViewTablePage';
import SearchResultPage from './pages/SearchResultPage';

//importing components

// importing styles
import './App.css';

function App() {

  const [book, setBook] = useState([]);
  const [bookTitle, setBookTitle] = useState('');

  return (
    <>

    <Router>
      <Routes>

        <Route path="/" element={<HomePage setBookTitle={setBookTitle}/>}/><Route/>
        <Route path='/addorupdatebook' element={<AddOrUpdatePage setBook={setBook}/>}/><Route/>
        <Route path="/addbook" element={<AddBookPage book={book}/>}/><Route/>
        <Route path="/updatebook" element={<UpdateBookPage book={book}/>}/><Route/>
        <Route path="/activity" element={<ActivityPage/>}/>
        <Route path="/viewcatalog" element={<ViewTablePage/>}/>
        <Route path="/searchresults" element={<SearchResultPage bookTitle={bookTitle}/>}/>

      </Routes>
    </Router>

    <footer>&copy; 2023 Joanna Getek</footer>
    </>
  );
}

export default App;
