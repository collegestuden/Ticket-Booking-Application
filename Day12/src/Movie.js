import React from 'react'
import './Movie.css';

function App() {
  return (
    <div className="body">
      <section className="top-bar">
        <div className="left-content">
            <h2 className="title">M4You</h2>
            <ul className="navigation">
                <li><a href="#">Home</a></li>
                <li><a className="active" href="#">Movies</a></li>
                <li><a href="#">Theaters</a></li>
                <li><a href="#">News</a></li>
            </ul>
        </div>
        <div className="right-content">
            <img src="./assets/images/filter.png" alt="" className="filter"/>
            <img src="./assets/images/cart.png" alt="" className="cart"/>
            <img src="./assets/images/help.png" alt="" className="help"/>
            <div className="profile-img-box">
                <img src="./assets/images/profile.jpg" alt=""/>
            </div>
            <img src="./assets/images/menu.png" alt="" className="menu"/>
        </div>
        </section>
    <section className="main-container">
  
        <div className="sidebar">
            <form action="#">
                <div className="sidebar-groups">
                    <h3 className="sg-title">Categories</h3>
                    <input type="checkbox" id="adventure" name="adventure" value="adventure"/>
                    <label for="adventure">Adventure</label>
                    <br></br>
                    <input type="checkbox" id="action" name="action" value="action"/>
                    <label for="action">Action</label>
                    <br></br>
                    <input type="checkbox" id="animation" name="animation" value="animation"/>
                    <label for="animation">Animation</label>
                    <br></br>
                    <input type="checkbox" id="comedy" name="comedy" value="comedy"/>
                    <label for="comedy">Comedy</label>
                    <br></br>
                    <input type="checkbox" id="science" name="science" value="science"/>
                    <label for="science">Science Fiction</label>
                    <br></br>
                    <input type="checkbox" id="thriller" name="thriller" value="thriller"/>
                    <label for="thriller">Thriller</label>
                    <br></br>
                    <input type="checkbox" id="history" name="history" value="history"/>
                    <label for="history">History</label>
                    <br></br>
                    <input type="checkbox" id="documentary" name="documentary" value="documentary"/>
                    <label for="documentary">Documentary</label>
                    <br></br>
                    <input type="checkbox" id="fantasy" name="fantasy" value="fantasy"/>
                    <label for="fantasy">Fantasy</label>
                    <br></br>
                </div>
                <div className="sidebar-groups">
                    <h3 className="sg-title">Language</h3>
                    <input type="checkbox" id="english" name="english" value="english"/>
                    <label for="english">English</label>
                    <br></br>
                    <input type="checkbox" id="spanish" name="spanish" value="spanish"/>
                    <label for="spanish">Spanish</label>
                    <br></br>
                    <input type="checkbox" id="hindi" name="hindi" value="hindi"/>
                    <label for="hindi">Hindi</label>
                    <br></br>
                </div>
                <div className="sidebar-groups">
                    <h3 className="sg-title">Time</h3>
                    <input type="radio" id="morning" name="time" value="morning"/>
                    <label for="morning">Morning</label>
                    <br></br>
                    <input type="radio" id="night" name="time" value="night"/>
                    <label for="night">Night</label>
                    <br></br>
                </div>
                <div className="sidebar-groups">
                    <a href="#" className="btn-l btn">Apply Filters</a>
                </div>
            </form>
        </div>
        <div className="movies-container">
            <div className="upcoming-img-box">
                <img src="https://static.toiimg.com/photo/91660096.jpeg" alt=""/>
                <p className="upcoming-title">Upcoming Movie</p>
                <div className="buttons">
                    <a href="#" className="btn">Book Now</a>
                    <a href="#" className="btn-alt btn">Play Trailer</a>
                </div>
            </div>
            <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/91660096.jpeg" alt=""/>
                    </div>
                    <h3 className="movie-title">Jurassic World</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">15$</h2>
                        <a href="#" className="btn">Buy Tickets</a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/91660096.jpeg" alt=""/>
                    </div>
                    <h3 className="movie-title">Vikram</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">10$</h2>
                        <a href="#" className="btn">Buy Tickets</a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/91660096.jpeg" alt=""/>
                    </div>
                    <h3 className="movie-title">Firestarter</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">5$</h2>
                        <a href="#" className="btn">Buy Tickets</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
  )
}

export default App
