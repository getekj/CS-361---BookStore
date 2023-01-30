import React, { useState } from 'react';
import HomeButton from '../components/HomeButton';
import { Navigate, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

function UpdateBookPage ({book}) {

    console.log(`On this update book page book is ${book.name}`);
    const [name, setName] = useState(book.name);
    const [author, setAuthor] = useState(book.author);
    const [price, setPrice] = useState(book.price);
    const [stock, setStock]   = useState(book.stock);
    const [description, setDescription]   = useState(book.description);
    
    let navigate = useNavigate();

    const editBook = async () => {
        const response = await fetch(`http://localhost:3000/books/${book._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                author: author,
                price: price,
                stock: stock,
                description: description
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited book!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update book. Status ${response.status}. ${errMessage.Error}`);
        }
        navigate('/addorupdatebook');
    }

    return (
        <>
        <h1> Update Entry </h1>
        <form onSubmit={(e) => {e.preventDefault();}}>
            <fieldset>
                <legend>Edit the book information!</legend>

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
                        onClick={editBook}
                        id="submit">
                        Save</button> updates to the book
                </label>

            </fieldset>
        </form>
        <HomeButton/>
        <BackButton/>
        </>

    );

};

export default UpdateBookPage;