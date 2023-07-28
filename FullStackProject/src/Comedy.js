import React from 'react'
import {Link} from 'react-router-dom';
import './Comedy.css';
function Comedy() {
  return (
        <div className="body">
      <section className="top-bar">
        <div className="left-content">
            <h2 className="title">Live Tix</h2>
            <ul className="navigation">
                <li><Link to="/Home"><a className=""href="#">Home</a></Link></li>
                <li><a className="active" href="#">Movies</a></li>
                <li><a href="#">Theaters</a></li>
                <li><a href="#">News</a></li>
            </ul>
        </div>
    <div className="right-content">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU2hUy2AAH_qKCJJvf0fAZSBslaJx8z86ew&usqp=CAU" alt="" className="help"/>
            <div className="profile-img-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&usqp=CAU" alt=""/>
            </div>
            <img src="./assets/images/menu.png" alt="" className="menu"/>
        </div>
        </section>
        

        
         <div className="movies-container">
            <div className="upcoming-img-box">
                <img src="https://images.indianexpress.com/2022/05/don-siva.jpg" alt=""/>
                <p className="upcoming-title">Upcoming Movie</p>
                <div className="buttons">
                   <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a> 
                    <a href="#" className="btn-alt btn">Play Trailer</a>
                </div>
            </div>

            








            <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/93336904.cms?resizemode=4" alt=""/>
                    </div>
                    <h3 className="movie-title">Viruman</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.120</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="" alt=""/>
                    </div>
                    <h3 className="movie-title">Welcome To NewYork</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.180</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://i.ytimg.com/vi/0zL3QoZUPSw/maxresdefault.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Good Night</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                    </div>
                    <h3 className="movie-title">Joker</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.150</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkn5PYNomUGcWzOguSiy0TLF0erqRSJD9Q2w&usqp=CAU" alt=""/>
                    </div>
                    <h3 className="movie-title">LootCase</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTlZ8QcXv5E9ugTnnPJ5Dn5_tWOveWnW06Q&usqp=CAU" alt=""/>
                    </div>
                    <h3 className="movie-title">Master</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRudVzhW7JEn3rtpjMwZUjrvisotSq32RgTa7zlai84d2F1WBmSZtGjRR_McoTEtXX0k&usqp=CAU" alt=""/>
                    </div>
                    <h3 className="movie-title">The Road</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9k4bR3_EyugvwNTR3y_3fkFrrjYAFjv4tNVaivJSOKzNdIQez5EM-mwNjFhPZ0sHpbqk&usqp=CAU" alt=""/>
                    </div>
                    <h3 className="movie-title">Yasodha</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/98797290.jpeg" alt=""/>
                    </div>
                    <h3 className="movie-title">Path thala</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Seat"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
            </div>
        </div>
        </div>

  )
}
export default Comedy;
