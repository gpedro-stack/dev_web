import React, {useState, useContext, useRef, useEffect} from 'react';


function MovieSearcher(){

    const APIkey = '63c08caa'

    const [movie, setMovie] = useState('');

    const [numMovies, setNumMovies] = useState([]);

    const [bookmarks, setBookmarks] = useState(() => {
        let savedBookmarks = sessionStorage.getItem('bookmarked');
        return savedBookmarks ? JSON.parse(savedBookmarks) : [];
    });

    useEffect(() => {
        if (movie.trim() !== ''){
            const getMovies = async () => {
                try {
                    const request = await fetch(`http://www.omdbapi.com/?apikey=${APIkey}&s=${movie}`);
                    
                    
                    if(!request.ok){
                        throw new Error("Error on request");
                        
                    }
        
                    const data = await request.json();
                    
                    
                    
                    if (data.Response != 'False') {

                        document.getElementById('error-paragraph').style.display = 'none';

                        
                        
                        setNumMovies(data.Search.slice(0,6));
                        
                        

                    } else {
                       
                        document.getElementById('error-paragraph').style.display = 'block';
                        setNumMovies([]);
                    }

                    

        
                } catch (error) {
                    document.getElementById('error-paragraph').style.display = 'block';
                    throw new Error("Couldn't fetch data");
                }
            }
            getMovies();
        }
    },[movie])


    useEffect(() => {
        sessionStorage.setItem('bookmarked',JSON.stringify(bookmarks));
    }, [bookmarks])

    function getMovieName(){
        setMovie(m => m = document.getElementById('movieInput').value);
        const book = document.querySelectorAll('.movie-interact');
            book.forEach((element) => {
                
                if (element.children[3].style.display == 'block') {
                    element.children[3].style.display = 'none';
                    
                }
            })
    }

    function handleBookmark(movie) {
        
        const book = document.querySelectorAll('.movies-list');
        let checkMovie = bookmarks.some((b) => b.imdbID === movie.imdbID);
        if (checkMovie === false){
            setBookmarks(b => [...b,movie]);
            book.forEach((element) => {
                
                if (element.children[1].children[0].textContent == movie.Title && element.children[0].src == movie.Poster) {
                    
                    element.children[1].children[3].textContent = 'Movie Bookmarked succesfully.';
                    element.children[1].children[3].style.display = 'block';
                }
            })
        } 
         else {
            
            book.forEach((element) => {
                
                if (element.children[1].children[0].textContent == movie.Title && element.children[0].src == movie.Poster) {
                    
                    element.children[1].children[3].textContent = 'Movie already bookmarked!';
                    element.children[1].children[3].style.display = 'block';
                }
            })
            
        }
        
        
    }


    return (
        <div className='movie-container'>
            <p>Type the name of the movie</p>
            <input type='text' id='movieInput' required placeholder='Type your movie here'/>
            <p id='error-paragraph' style={{display: 'none', color: 'red'}}>The movie you searched for doesn't exist! You either wrote it incorrectly or it doesn't exist.</p>
            <button onClick={getMovieName}>Submit</button><br />
            <div className='movies-list-container'>
               
               {numMovies.length > 0 ? (
                numMovies.map((movie, index) => (
                    <div className='movies-list' key={index}>
                            
                            <img src={movie.Poster} alt="Movie Poster" />
                         
                            <div className='movie-interact'>
                            <h3>{movie.Title}</h3>
                            <p>Movie Year of Release: {movie.Year}</p>
                            <button onClick={() => handleBookmark(movie)}>Bookmark</button>
                            <p id='movie-bookmark' style={{display: 'none', color: 'red'}}>Movie is already bookmarked.</p>
                            </div>
                         
                    </div>
                ))
               ) : ''}
               
            </div>
            
        </div>
    );
}

export default MovieSearcher