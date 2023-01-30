import React from 'react';
import { Link } from 'react-router-dom';

function AddBookButton() {
    return (
      <>
        <Link to="/addbook">
          <button>Add New Book</button>
        </Link>
      </>
    );
  }

export default AddBookButton;