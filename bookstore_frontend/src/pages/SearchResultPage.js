import React from 'react';
import { useEffect, useState } from 'react';
import HomeButton from '../components/HomeButton';


function SearchResultPage ({bookTitle}) {
    
    console.log(`the passed param is ${bookTitle}`);

    // Use state to bring in the data
    const [books, setBooks] = useState([]);
    const [bookInfo, setBookInfo] = useState('');
    const [isShown, setIsShown] = useState(false);

    // RETRIEVE the list of books
    const loadBooks = async () => {
        const response = await fetch('http://localhost:3000/books');
        const books = await response.json();
        setBooks(books);

        if(books !== undefined){
            for(let book_obj of books) {
                // console.log(book_obj.name)
                if(book_obj.name === bookTitle){
                    console.log(`in the for loop ${book_obj.name}`)
                    console.log(book_obj)
                    setBookInfo(book_obj)
                }
            }
        };
    } 

    // LOAD the books
    useEffect(() => {
        loadBooks();
    }, []);

    const handleClick = event => {
        setIsShown(true);
    };

    console.log(books)


    return (
        <>
        <h1>Search Results</h1>
        <p> Found Results for: {bookTitle} </p>
        <button
            onClick={handleClick}
        > See More Information </button>

        {isShown && (
            <div className='book-info'>
                <h3>Title: {bookInfo.name}</h3>
                <h3>Author: {bookInfo.author}</h3>
                <h3>Price: ${bookInfo.price} USD</h3>
                <h3>Number in Stock: {bookInfo.stock}</h3>
                <h3>Description:</h3> <p>{bookInfo.description}</p>
            </div>
        )}
        <HomeButton/>
        </>
    );
}




export default SearchResultPage;