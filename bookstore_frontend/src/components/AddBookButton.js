import React from 'react';
import { Link } from 'react-router-dom';

function AddBookButton() {
    return (
      <>
        <Link to="/addbook">
          <button title='Takes you to new page to add a book'>Add New Book</button>
        </Link>
      </>
    );
  }

export default AddBookButton;