import React from 'react';
import { MdOutlineEdit, MdDeleteForever } from 'react-icons/md';

function Book({ book, onEdit, onDelete}) {
    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td>{book.stock}</td>
            <td>{book.description}</td>
            <td><MdOutlineEdit onClick={() => onEdit(book)} /></td>
            <td><MdDeleteForever onClick={() => onDelete(book._id)}/></td>
        </tr>
    );
}

export default Book;