import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AddBookButton from '../components/AddBookButton';
import BookTable from '../components/BookTable';
import HomeButton from '../components/HomeButton';

function AddOrUpdatePage ( {setBook} ) {

        // use navigate to render new page without user needing to click
        const navigate = useNavigate();

        // Use state to bring in the data
        const [books, setBooks] = useState([]);

        // RETRIEVE the list of books
        const loadBooks = async () => {
            const response = await fetch('http://localhost:3000/books');
            const books = await response.json();
            setBooks(books);
        } 
        
    
        // UPDATE a book
        const onEdit = async book => {
            setBook(book);
            navigate("/updatebook")
            //history.push("/updatebook");
        }
    

        // LOAD the books
        useEffect(() => {
            loadBooks();
        }, []);

    return (
        <>
        <h1>ADD OR UPDATE PAGE</h1>
        <AddBookButton/>
        <BookTable 
                    books={books} 
                    onEdit={onEdit} 
                />
        <HomeButton/>
        </>
    );
};

export default AddOrUpdatePage;