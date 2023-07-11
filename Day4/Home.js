import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';
function Home() {
  return (
        <div className="body">
      <section className="top-bar">
        <div className="left-content">
            <h2 className="title">Live Tix</h2>
            <ul className="navigation">
                <li><a className="active"href="#">Home</a></li>
                <li><a>Movies</a></li>
                <li><a href="#">Theaters</a></li>
                <li><a href="#">News</a></li>
            </ul>
            <ul className="nav">
                <a><Link to="/Login"><li><a href="#">Login</a></li></Link></a>
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
        <section className="main-container">
  
  <div className="sidebar">
      <form action="#">
          <div className="sidebar-groups">
              <h3 className="sg-title">Categories</h3>
              <label for="adventure">Adventure</label>
              <input type="checkbox" id="adventure" name="adventure" value="adventure"/>
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
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00351731-qymwnreevr-landscape.jpg" alt=""/>
                <p className="upcoming-title">Upcoming Movie</p>
                <div className="buttons">
                    <a href="#" className="btn">Book Now</a>
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
                        <a href="#" className="btn">Book Now</a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/91660096.jpeg" alt=""/>
                    </div>
                    <h3 className="movie-title">Vikram</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.180</h2>
                        <a href="#" className="btn">Book Now</a>
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
                        <a href="#" className="btn">Book Now</a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/100614017.cms?resizemode=4" alt=""/>
                    </div>
                    <h3 className="movie-title">Por Thozil</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.150</h2>
                        <a href="#" className="btn">Book Now</a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OoCm78qtNleTUinr6aOgnH1S6GoUPZIGYw&usqp=CAU" alt=""/>
                    </div>
                    <h3 className="movie-title">Valimai</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a href="#" className="btn">Book Now</a>
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
                        <a href="#" className="btn">Book Now</a>
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
                        <a href="#" className="btn">Book Now</a>
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
                        <a href="#" className="btn">Book Now</a>
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
                        <a href="#" className="btn">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>

  )
}
export default Home;
