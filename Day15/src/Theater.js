import React from 'react'
import {Link} from 'react-router-dom';
import './Theater.css';
function Home() {
  return (
        <div className="body">
      <section className="top-bar">
        <div className="left-content">
            <h2 className="title">Live Tix</h2>
            <ul className="navigation">
                <li><Link to="/Home"><a href="#">Home</a></Link></li>
                <li><a>Movies</a></li>
                <li><a><Link to="/Theater"><a className="active" href="#">Theaters</a></Link></a></li>
                <li><a href="#">News</a></li>
            </ul>
        </div>
    <div className="right-content">

    <a><Link to="/Report"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU2hUy2AAH_qKCJJvf0fAZSBslaJx8z86ew&usqp=CAU" alt="" className="help"/></Link></a>
            <div className="profile-img-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&usqp=CAU" alt=""/>
            </div>
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
        <div className="the">
            <b><h1>Theaters in Coimbatore</h1></b>
        <br></br><br></br>
            <h2 className="th">INOX Prozone Mall</h2>
            <br></br>
            <div className="butt">
                <a><Link to="/Seat"><button type="submit">10.00AM</button> {" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">1.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">4.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">11.00PM</button></Link></a>
            </div>
            <br></br><br></br>
            <h2 className="th">The Cinema Brookefields ( SPI Cinemas )</h2>
            <br></br>
            <div className="butt">
            <a><Link to="/Seat"><button type="submit">10.00AM</button> {" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">1.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">4.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">11.00PM</button></Link></a>
            </div>
            <br></br><br></br>
            <h2 className="th">KG Cinemas. ...</h2>
            <br></br>
            <div className="butt">
            <a><Link to="/Seat"><button type="submit">10.00AM</button> {" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">1.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">4.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">11.00PM</button></Link></a>
            </div>
            <br></br><br></br>
            <h2 className="th">Fun Cinemas ( Cinépolis ) ...</h2>
            <br></br>
            <div className="butt">
            <a><Link to="/Seat"><button type="submit">10.00AM</button> {" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">1.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">4.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">11.00PM</button></Link></a>
            </div>
            <br></br><br></br>
            <h2 className="th">Karpagam Cinemas. ...</h2>
            <br></br>
            <div className="butt">
            <a><Link to="/Seat"><button type="submit">10.00AM</button> {" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">1.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">4.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">11.00PM</button></Link></a>
            </div>
            <br></br><br></br>
            <h2 className="th">Senthil Kumaran Theatres</h2>
            <br></br>
            <div className="butt">
            <a><Link to="/Seat"><button type="submit">10.00AM</button> {" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">1.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">4.00PM</button>{" "}</Link></a>
                <a><Link to="/Seat"><button type="submit">11.00PM</button></Link></a>
            </div>
           
       
        </div>
        </section>

        </div>

  )
}
export default Home;
