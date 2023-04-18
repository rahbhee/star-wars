import React, { useState, useEffect } from 'react';
import images from './images/pngwing.com.png';



function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      /*.then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);*/
  .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const formatDate = (date, format) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    if (format === 'short') {
      return formattedDate.split(' ').slice(1).join(' ');
    } else if (format === 'long') {
      return formattedDate;
    } else {
      return date;
    }
  }
  const reduceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength).trim() + '...';
    } else {
      return text;
    }
  }
 
  return (
    <div className="info">
      {loading ? (
         <div >
         <img className="imagepreloader" src={images} alt="mylogo" ></img></div>
      ) : (
      <ul>
        {movies.map(movie => (
          <li key={movie.episode_id}>
            <h2>{movie.title}</h2>
            <p className="date">{formatDate(movie.release_date, 'long')}</p>
            <p className="line">{reduceText(movie.opening_crawl,260)}</p>
            <a href="#">More Info</a>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
  
}

export default MovieApp;

