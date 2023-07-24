import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './redux/userSlice';
import Profile from './Profile';
import img1 from './assets/TicketBookingAPp.pdf';
function Home() {
    const user=useSelector(selectUser);
  return (
        <div className="body">

      <section className="top-bar">
        <div className="left-content">
            <h2 className="title">LiveTix</h2>
            <ul className="navigation">
                <li><a className="active"href="#">Home</a></li>
                <li><Link to="/Comedy"><a>Movies</a></Link></li>
                <li><a><Link to="/Theater"><a href="#">Theaters</a></Link></a></li>
                <li><Link to="/Search"><a href="#">Search</a></Link></li>
                
                
            </ul>
           
        </div>
    <div className="right-content">
        

    <ul className="nav">
                <a className=""><Link to="/Login"><li><a href="#">LogOut</a></li></Link></a>
                
            </ul>
            <a><Link to="/Profile">
            <div className="profile-img-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&usqp=CAU" alt=""/>
                
            </div>
            </Link>
                </a>
            <img src="./assets/images/menu.png" alt="" className="menu"/>
        </div>
        </section>
        

        <section className="main-container">
  
  <div className="sidebar">
          <div className="sidebar-groups">
            <div className="crt">
              <h3 className="sg-title">Categories</h3>
              <br></br>
              <br></br>
              <a><Link to="/Adventure"><a href="#">Adventure</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Animation"><a href="#">Animation</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Science"><a href="#">Science Fiction</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Comedy"><a href="#">Comedy</a></Link></a>
              <br></br>
              <br></br>
              <a><Link to="/Thriller"><a href="#">Thriller</a></Link></a>
              <br></br>
              <br></br>
              <a href="#">History</a>
              <br></br>
              <br></br>
              <a href="#">Fantasy</a>
              <br></br>
              <br></br>
<h3 className="sg-title">Languages</h3>
<br></br>
<br></br>
<a><Link to="/Tamil"><a href="#">Tamil</a></Link></a>
<br></br>
<br></br>
<a><Link to="/English"><a href ="#">English</a></Link></a>
<br></br>
<br></br>
<a><Link to="/Hindi"><a href="#">Hindi</a></Link></a>
             </div>
  </div>
  
  </div>
         <div className="movies-container">
            <div className="upcoming-img-box">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00351731-qymwnreevr-landscape.jpg" alt=""/>
                <p className="upcoming-title">Upcoming Movie</p>
                <div className="buttons">
                   <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a> 
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
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
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
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/98797290.jpeg" alt=""/>
                    </div>
                    <h3 className="movie-title">Pathu thala</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
            </div>
            
        </div>
        
        </section>
        
        <center>
            <ul className="kko">
                <li><Link to="/ChatBot"><a href="#">ChatBot</a></Link></li>
                <li><a href={img1}>CaseStudies</a></li>
                <li><Link to="/Report"><a href="#">Help</a></Link></li>
                <li><a href="mailto:abinaya123567@gmail.com">ContactUs</a></li>
                <li><Link to="/Feedback"><a href="#">Feedback</a></Link></li>
            </ul>
            </center>
        </div>
        

  )
}
export default Home;