import React from 'react';
import UpdateCatalogButton from '../components/UpdateCatalogButton';
import HomeButton from '../components/HomeButton';
import bookshelf from '../components/bookshelf.jpg';

function HomePage () {
    return (
        <>
        <h1> Logos BookStore </h1>
        <img src={bookshelf} alt="bookshelf"/>
        <HomeButton/>
        <UpdateCatalogButton/>
        </>

    );

};

export default HomePage;