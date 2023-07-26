import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css'

const Getbook = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const storedToken = localStorage.getItem('token');

  useEffect(() => {
    // Fetch the token from local storage if available
    setToken(storedToken);

    // Fetch existing movies from the backend when the component mounts
    fetchExistingMovies();
  }, []);

  const fetchExistingMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8181/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching existing movies:', error);
    }
  };

  // Filter the data based on the search query
  const filteredData = data.filter((book) =>
    book.movie.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <h1 className="h8">View Movies</h1><br /><br />
          {/* Search Bar */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
          />
        </div>
        <div className="movies-container">
          
          
        <div className="template_Container">
          {filteredData.map((book) => (
            <div key={book.id}>
              <div className="cm-img-box">
                <img src={book.imageurl} alt="" />
              </div>
              <h3 className="movie-title">{book.movie}</h3>
              <p className="screen-ne">{book.theater}</p>
              <p className="screen-ne">{book.time}</p>
              <div className="booking">
                <h2 className="price">Rs.200</h2>
                <Link to="/Theater">
                  <a href="#" className="btn">
                    Book Now
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Getbook;
