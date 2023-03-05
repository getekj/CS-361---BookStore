import React from 'react';
import UpdateCatalogButton from '../components/UpdateCatalogButton';
import HomeButton from '../components/HomeButton';
import ActivityButton from '../components/ActivityButton';
import ViewTableButton from '../components/ViewTableButton';
import "./HomePage.css";
import Annhilation from '../components/Annhilation.png';
import SearchBar from '../components/SearchBar';

function HomePage () {
    return (
        <>
        <h1 className='bookstore_title'> Logos BookStore </h1>

        <div className='buttons-list'>
            <HomeButton/>
            <ViewTableButton/>
            <UpdateCatalogButton/>
            <ActivityButton/>
        </div>

        <div className='featured'>
            <div className='featured-text-wrapper'>
                <p> New Books Featured This Week </p>
            </div>
            <img src={Annhilation} alt="Annhilation Book Cover"></img>
            <SearchBar/>
        </div>

        </>

    );

};

export default HomePage;