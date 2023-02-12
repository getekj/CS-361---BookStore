import React from 'react';
import { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import BookView from '../components/BookView';

function ViewTablePage () {

    // Use state to bring in the data
    const [books, setBooks] = useState([]);

    // RETRIEVE the list of books
    const loadBooks = async () => {
        const response = await fetch('http://localhost:3000/books');
        const books = await response.json();
        setBooks(books);
    } 

    // LOAD the books
    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <>
        <h1>THIS IS VIEW TABLE PAGE</h1>
        <table id="books">
            <caption>Here is a list of all the books in the catalog</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, i) => 
                    <BookView 
                        book={book} 
                        key={i}
                    />
                    )}
            </tbody>
        </table>

        <HomeButton/>
        </>
    );

};

export default ViewTablePage;