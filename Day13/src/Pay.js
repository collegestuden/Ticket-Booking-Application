import React from 'react'
import {Link} from 'react-router-dom';
import './Pay.css';
function Pay() {
  return (
        <div className="body">
      <section className="top-bar">
        <div className="left-content">
            <h2 className="title">Live Tix</h2>
            
        </div>
    <div className="right-content">

            <a><Link to="/Report"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVU2hUy2AAH_qKCJJvf0fAZSBslaJx8z86ew&usqp=CAU" alt="" className="help"/></Link></a>
            <div className="profile-img-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&usqp=CAU" alt=""/>
            </div>
            <img src="./assets/images/menu.png" alt="" className="menu"/>
        </div>
        </section>
        
        <center><h1 className="ioi">Payment</h1></center>
        <br></br><br></br>
        <br></br><br></br><br></br>
         <div className="current-movies">
                <div className="current-movie">
                    <div className="cm-img-box">
                    <Link to="/Receipt">
                        <img src="data:image/png;base64,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" alt=""/>
                    </Link>
                    <p classNmae="text">Gpay</p>
                    </div>
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <Link to="/Receipt">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9c8RS0hH0g-Dwc_aDD2a-BghQDm0bZ2rKfm6ytUZwtD6tr2mEtPwIyWPBTiZZZ8CQoBA&usqp=CAU" alt=""/>
                    </Link>
                    </div>
                    
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <Link to="/Receipt">
                        <img src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg" alt=""/>
                    </Link>
                    </div>
                    
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <Link to="/Card">
                        <img src="data:image/png;base64,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" alt=""/>
                    </Link>
                    </div>
                    
                </div>
                <div className="current-movie">
                    <div className="cm-img-box">
                        <Link to="/Receipt">
                        <img src="data:image/png;base64,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" alt=""/>
                    </Link>
                    </div>
                    
                </div>

                <div className="current-movie">
                    <div className="cm-img-box">
                        <Link to="/Receipt">
                        <img src="data:image/png;base64,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" alt=""/>
                    </Link>
                    </div>
                    
                </div>
                
               

            </div>
        </div> 
        
       

  )
}
export default Pay;
