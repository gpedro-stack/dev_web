import React, {useState, useContext, useEffect, useRef} from 'react-dom'

function Bookmarks(){


    let movies = JSON.parse(sessionStorage.getItem('bookmarked')) || [];


    function handleRemoveBookmark(movie) {
       movies = movies.filter((element) => element.Title != movie.Title);
       sessionStorage.setItem('bookmarked',JSON.stringify(movies));
       window.location.reload();
    }


    return (
        
        <>
        <div className='bookmark-container'>
        <div className='bookmarks-list-container'>
            {movies.length > 0 ? (
                movies.map((element,index) => (
                    <div className='bookmarks-list' key={index}>
                        <img src={element.Poster} alt="Movie Poster"/>
                        <div className='bookmarks-interact'>
                            <h3>{element.Title}</h3>
                            <p>Movie Year of Release: {element.Year}</p>
                            <button onClick={() => handleRemoveBookmark(element)}>Remove from bookmarks</button>
                        </div>
                    </div>
                ))
            ) : <h2 className='no-bookmark'>You don't have any bookmarks!</h2>}
        </div>
        </div>

        </>
        
    )
}


export default Bookmarks