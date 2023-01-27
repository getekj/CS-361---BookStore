import React, { useState } from 'react';



function AddBookPage () {

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');

    const addBook = async (e) => {
        const newBook = { name, author, price, stock, description };
        
        const response = await fetch("/books", {
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

                <label for="name">Title of Book</label>
                <input
                    type="text"
                    minlength="1"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    id="name"
                    required
                />

                <label for="author">Author of Book</label>
                <input
                    type="text"
                    minlength="1"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    id="author"
                    required
                />

                <label for="price">Price of Book</label>
                <input
                    type="number"
                    minlength="1"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    id="price"
                    required
                />

                <label for="stock">Number of Book in Stock</label>
                <input
                    type="number"
                    minlength="1"
                    value={stock}
                    onChange={e => setStock(e.target.value)}
                    id="stock"
                    required
                />

                <label for="Description">Brief Description About the Book</label>
                <input
                    type="text"
                    minlength="1"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    id="description"
                    required
                />

                <label for="submit">
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