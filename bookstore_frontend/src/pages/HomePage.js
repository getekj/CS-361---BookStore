import React from 'react';
import UpdateCatalogButton from '../components/UpdateCatalogButton';
import HomeButton from '../components/HomeButton';
import bookshelf from '../components/bookshelf.jpg';
import ActivityButton from '../components/ActivityButton';
import ViewTableButton from '../components/ViewTableButton';

function HomePage () {
    return (
        <>
        <h1> Logos BookStore </h1>
        <img src={bookshelf} alt="bookshelf"/>
        <HomeButton/>
        <UpdateCatalogButton/>
        <ActivityButton/>
        <ViewTableButton/>
        </>

    );

};

export default HomePage;