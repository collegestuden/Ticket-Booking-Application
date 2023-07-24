import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Get.css';

const Getbook = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  
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

  return (
    <div>
      <div className="templateContainer">
        <h1 className="h8">View Movies</h1><br /><br />
        <div className="movies-container">
          <div className="template_Container">
            {data.map((book) => (
              <div key={book.id}>
                <div className="cm-img-box">
                  <img src={book.imageurl} alt="" />
                </div>
                <h3 className="movie-title">{book.movie}</h3>
                <p className="screen-name">Screen: Platinum</p>
                <div className="booking">
                  <h2 className="price">Rs.100</h2>
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
