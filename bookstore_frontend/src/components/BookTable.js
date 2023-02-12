import React from 'react';
import Book from './Book';

function BookTable({ books, onEdit, onDelete }) {
    return (
        <table id="books">
            <caption>Click on the icons in the rightmost column to edit book</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, i) => 
                    <Book 
                        book={book} 
                        key={i}
                        onEdit={onEdit} 
                        onDelete={onDelete}
                    />
                    )}
                
            </tbody>
        </table>
    );
}

export default BookTable;