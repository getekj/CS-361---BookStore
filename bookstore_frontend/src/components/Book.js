import React from 'react';
import { MdOutlineEdit } from 'react-icons/md';

function Book({ book, onEdit}) {
    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td>{book.stock}</td>
            <td>{book.description}</td>
            <td><MdOutlineEdit onClick={() => onEdit(book)} /></td>
        </tr>
    );
}

export default Book;