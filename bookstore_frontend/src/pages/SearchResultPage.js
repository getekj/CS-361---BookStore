import React from 'react';
import { useEffect, useState } from 'react';

function SearchResultPage ({bookTitle}) {
    
    console.log(`the passed param is ${bookTitle}`);

    // Use state to bring in the data
    const [books, setBooks] = useState([]);
    // const [bookInfo, setBookInfo] = useState('');

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

    console.log(books)

    if(books !== undefined){
        for(let book_obj of books) {
            // console.log(book_obj.name)
            if(book_obj.name === bookTitle){
                console.log(`in the for loop ${book_obj.name}`)
                console.log(book_obj)
            }
        }
    };

    return (
        <>
        <h1>This is the Search Result Page</h1>
        <p> the book title is {bookTitle} </p>
        {/* {bookInfo !== '' &&
            <div className='bookinfo_display'>The Book info is {bookInfo}</div>
        } */}
        </>
    );
}

export default SearchResultPage;