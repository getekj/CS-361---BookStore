import React from 'react';

function UpdateBookButton({book}) {

  console.log("we made it to update book button")
  console.log(book.name)

    return (
      <>
    <nav className='update_button'>
        <a href="/updatebook">Update Book</a>
    </nav>
    </>
    );
  }

export default UpdateBookButton;