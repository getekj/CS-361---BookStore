import React, { useState } from 'react';



function AddBookPage () {

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');

    const addBook = async (e) => {
        const newBook = { name, author, price, stock, description };
        
        const response = await fetch("http://localhost:3000/books", {
            method: 'POST',
            body: JSON.stringify(newBook),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201) {
            alert("Successfully added the book!");
        } else {
            alert(`Failed to add book, status code = ${response.status}`);
        }
    };


    return (
        <>
        <h1> HELLO THIS IS AddBookPage </h1>
        <form onSubmit={(e) => {e.preventDefault();}}>
            <fieldset>
                <legend>Provide details about the book you are adding!</legend>

                <label className='name'>Title of Book</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    id="name"
                    required
                />

                <label className='author'>Author of Book</label>
                <input
                    type="text"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    id="author"
                    required
                />

                <label className='price'>Price of Book</label>
                <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    id="price"
                    required
                />

                <label className='stock'>Number of Book in Stock</label>
                <input
                    type="number"
                    value={stock}
                    onChange={e => setStock(e.target.value)}
                    id="stock"
                    required
                />

                <label className='description'>Brief Description About the Book</label>
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    id="description"
                    required
                />

                <label className='submit'>
                    <button
                        type="submit"
                        onClick={addBook}
                        id="submit">
                        Add</button> to the catalog
                </label>

            </fieldset>
        </form>
        </>
    );
};

export default AddBookPage;