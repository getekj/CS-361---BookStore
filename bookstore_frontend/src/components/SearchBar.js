import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar ({setBookTitle}) {
    
    const [searchBookTitle, setSearchBookTitle] = useState('');

    let navigate = useNavigate();

    const searchBook = async bookTitle => {
        setBookTitle(bookTitle);
        navigate("/searchresults")
    }

    return (
        // <div className="search-bar-wrapper">
            <div className="search-field">
            <form onSubmit={(e) => {e.preventDefault();}}>
                <input 
                    id="search-bar"
                    value={searchBookTitle}
                    onChange={e => setSearchBookTitle(e.target.value)}
                    type="text"
                    placeholder="Enter Book Title Here ... "
                ></input>
                <label className='submit-search'>
                    <button
                        type="submit"
                        onClick={() => searchBook(searchBookTitle)}
                        id="submit"
                        title="search takes you to a new page">
                        Search</button>
                </label>
            </form>
            </div>

        // </div>
    )
};

export default SearchBar;