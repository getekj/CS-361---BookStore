import React, { useState, useEffect } from 'react';
import AddBookButton from '../components/AddBookButton';
import BookTable from '../components/BookTable';

function AddOrUpdatePage ( {setBook} ) {

        // Use state to bring in the data
        const [books, setBooks] = useState([]);

        // RETRIEVE the list of books
        const loadBooks = async () => {
            const response = await fetch('http://localhost:3000/books');
            const books = await response.json();
            setBooks(books);
        } 
        
    
        // UPDATE a book
        const onEditBook = async book => {
            setBook(book);
            //history.push("/updatebook");
        }
    

        // LOAD the exercises
        useEffect(() => {
            loadBooks();
        }, []);

    return (
        <>
        <h1>ADD OR UPDATE PAGE</h1>
        <AddBookButton/>
        <BookTable 
                    books={books} 
                    onEdit={onEditBook} 
                />
        </>
    );
};

export default AddOrUpdatePage;