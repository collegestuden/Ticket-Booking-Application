import React from 'react';
import './Receipt.css'
const ETicket = ({ movieTitle, cinemaName, showTime, seatNumber }) => {
  return (
    <div>
      <center><h1 className="tq">E-Ticket</h1></center>
      <button className="iy">
    <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/02/1676295390694.jpg?ssl=1&quality=80&w=720&h=1650" alt="Button Icon" className="up" />
   Print
  </button>
    </div>
  );
};

export default ETicket;
