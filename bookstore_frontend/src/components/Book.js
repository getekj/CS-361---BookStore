import React from 'react';
import UpdateBookButton from './UpdateBookButton';

function Book({ book, onEdit}) {
    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td>{book.stock}</td>
            <td>{book.description}</td>
            <td><UpdateBookButton onClick={() => onEdit(book)} /></td>
        </tr>
    );
}

export default Book;