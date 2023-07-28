import React from 'react'
import {Link} from 'react-router-dom';
import './Hindi.css';
function Hindi() {
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

    <a><Link to="/Report"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU2hUy2AAH_qKCJJvf0fAZSBslaJx8z86ew&usqp=CAU" alt="" className="help"/></Link></a>
            <div className="profile-img-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&usqp=CAU" alt=""/>
            </div>
            <img src="./assets/images/menu.png" alt="" className="menu"/>
        </div>
        </section>
        

        
         <div className="movies-container">
            <div className="upcoming-img-box">
                <img src="https://www.koimoi.com/wp-content/new-galleries/2015/11/dilwale-movie-poster-3.jpg" alt=""/>
                <p className="upcoming-title">Upcoming Movie</p>
                <div className="buttons">
                   <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a> 
                    <a href="#" className="btn-alt btn">Play Trailer</a>
                </div>
            </div>

            








            <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/2-india-movie-poster-design-hindi-bjirao-mastani.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Bajiro Mastani</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.120</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://www.fabhotels.com/blog/wp-content/uploads/2021/12/5.-TAMASHA-.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Tamasa</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.180</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                    </div>
                    <h3 className="movie-title">Veer Zaara</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://www.fabhotels.com/blog/wp-content/uploads/2021/12/1.Karwaan-poster.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Kar Waan</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.150</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://images.indianexpress.com/2022/05/KGF2-1200by667.jpg?w=414" alt=""/>
                    </div>
                    <h3 className="movie-title">KGF</h3>
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
                        <img src="https://c8.alamy.com/comp/F762X4/indian-bollywood-hindi-film-movie-poster-of-bol-bachchan-a-rohit-shetty-F762X4.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Bol Bachan</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-3.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Ghayal</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://origin-staticv2.sonyliv.com/videoasset_images/appan_set1_hindi_29oct_landscape_thumb.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Appan</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
            </div>
        </div>
        </div>

  )
}
export default Hindi;
