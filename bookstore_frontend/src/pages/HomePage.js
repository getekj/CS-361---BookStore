import React from 'react';
// import { useEffect, useState } from 'react';
import UpdateCatalogButton from '../components/UpdateCatalogButton';
import HomeButton from '../components/HomeButton';
import ActivityButton from '../components/ActivityButton';
import ViewTableButton from '../components/ViewTableButton';
import "./HomePage.css";
import Annhilation from '../components/Annhilation.png';
import SearchBar from '../components/SearchBar';
import { FaGlasses } from 'react-icons/fa';

function HomePage ({setBookTitle}) {


    return (
        <>
        <h1 className='bookstore_title'> Logos BookStore <FaGlasses/> </h1>

        <div className='buttons-list'>
            <HomeButton/>
            <ViewTableButton/>
            <UpdateCatalogButton/>
            <ActivityButton/>
        </div>

        <div className='featured'>
            <div className='featured-text-wrapper'>
                <h3> Check out our new featured book! Use the search below</h3>
                {/* <p> Search through our catalog</p> */}
            </div>
            <img src={Annhilation} alt="Annhilation Book Cover"></img>
            <SearchBar setBookTitle={setBookTitle}/>
        </div>
        </>

    );

};

export default HomePage;