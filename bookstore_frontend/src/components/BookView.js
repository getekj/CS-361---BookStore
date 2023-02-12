import React from 'react';

function BookView({book}) {
    return (
        <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td>{book.stock}</td>
            <td>{book.description}</td>
        </tr>
    );
}

export default BookView;