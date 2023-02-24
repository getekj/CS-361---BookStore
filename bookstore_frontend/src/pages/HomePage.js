import React from 'react';
import UpdateCatalogButton from '../components/UpdateCatalogButton';
import HomeButton from '../components/HomeButton';
import ActivityButton from '../components/ActivityButton';
import ViewTableButton from '../components/ViewTableButton';
import "./HomePage.css";
import Annhilation from '../components/Annhilation.png';

function HomePage () {
    return (
        <>
        <h1 className='bookstore_title'> Logos BookStore </h1>
        <div className='featured'>
            <p> New Books Featured This Week </p>
            <img src={Annhilation} alt="Annhilation Book Cover"></img>
        </div>


        <HomeButton/>
        <UpdateCatalogButton/>
        <ActivityButton/>
        <ViewTableButton/>
        </>

    );

};

export default HomePage;