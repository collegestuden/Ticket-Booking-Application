import React from 'react'
import {Link} from 'react-router-dom';
import './Tamil.css';
function Tamil() {
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
                <img src="https://nettv4u.com/imagine/05-06-2017/meesaya-murukku-tamil-movie-good-looking-posters-1.jpg" alt=""/>
                <p className="upcoming-title">Upcoming Movie</p>
                <div className="buttons">
                   <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a> 
                    <a href="#" className="btn-alt btn">Play Trailer</a>
                </div>
            </div>

            








            <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://www.filmibeat.com/img/560x80x292/popcorn/list_items/love-today-20221203184110-3773.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Love Today</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.120</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://static.toiimg.com/photo/73582132/size-1997738/73582132.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Seru</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.180</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://webneel.com/daily/sites/default/files/images/daily/01-2019/3-tamil-movie-poster-design-india-tamil-jetle-prathoolnt.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Jetly</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://www.newsfolo.com/wp-content/uploads/2017/08/maayavan-810x367.png" alt=""/>
                    </div>
                    <h3 className="movie-title">Mayaven</h3>
                    <p className="screen-name">Screen : Platinum</p>
                    <div className="booking">
                        <h2 className="price">Rs.150</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://i2.cinestaan.com/image-bank/640-360/198001-199000/198814.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Kadaisi Vivasaye</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://cityspideynews.s3.amazonaws.com/uploads/spidey/202105/karnan-movie-1621927647.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Karnan</h3>
                    <p className="screen-name">Screen : Silver</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Koozhangal_310521_1200_0.jpg?itok=37Bg5VJo" alt=""/>
                    </div>
                    <h3 className="movie-title">Kulingal</h3>
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
                    <h3 className="movie-title">Path thala</h3>
                    <p className="screen-name">Screen : Gold</p>
                    <div className="booking">
                        <h2 className="price">Rs.100</h2>
                        <a><Link to="/Theater"><a href="#" className="btn">Book Now</a></Link></a>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/04/07/Pictures/karthi-veliyidai-aditi-rao-hydari-kaatru-poster_c5458614-1b6a-11e7-8dd7-d947b0232760.jpg" alt=""/>
                    </div>
                    <h3 className="movie-title">Kaatru Veliyidai</h3>
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
export default Tamil;
