import React, { useState, useEffect } from "react";
import './Seat.css';
import {Link} from 'react-router-dom';

const Seat = () => {
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketPrice, setTicketPrice] = useState(220);

  const movies = [
    { title: "Vikram", price: 180 },
    { title: "Valimai", price: 100 },
    { title: "Por thozhil", price: 120 },
    { title: "Viruman", price: 120 },
    { title: "Valimai", price: 180 },
    { title: "leo", price: 200 },
  ];

  useEffect(() => {
    const storedSelectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    const storedSelectedSeats = localStorage.getItem("selectedSeats");

    if (storedSelectedMovieIndex !== null) {
      setSelectedMovieIndex(parseInt(storedSelectedMovieIndex));
    }

    if (storedSelectedSeats !== null) {
      setSelectedSeats(JSON.parse(storedSelectedSeats));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedMovieIndex", selectedMovieIndex);
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedMovieIndex, selectedSeats]);

  const handleMovieChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    setSelectedMovieIndex(selectedIndex);
    setTicketPrice(movies[selectedIndex].price);
    setSelectedSeats([]);
  };

  const handleSeatClick = (seatIndex) => {
    if (selectedSeats.includes(seatIndex)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== seatIndex)
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatIndex]);
    }
  };

  const renderSeats = () => {
    const rows = 8;
    const seatsPerRow = 12;
    const seatRows = [];

    for (let i = 0; i < rows; i++) {
      const seatRow = [];

      for (let j = 0; j < seatsPerRow; j++) {
        const seatIndex = i * seatsPerRow + j;
        const isSeatSelected = selectedSeats.includes(seatIndex);

        seatRow.push(
          <div
            key={seatIndex}
            className={`seat ${isSeatSelected ? "selected" : ""} ${
              j === 1 || j === 9 ? "sold" : ""
            }`}
            onClick={() => handleSeatClick(seatIndex)}
          ></div>
        );
      }

      seatRows.push(
        <div key={i} className="row">
          {seatRow}
        </div>
      );
    }

    return seatRows;
  };

  const calculateTotalPrice = () => {
    return selectedSeats.length * ticketPrice;
  };

  const handleConfirmPay = () => {
    // Handle the payment confirmation logic here
    console.log("Payment confirmed!");
  };

  return (
    <div>
      <div className="movie-container">
        <h1>Select a movie:</h1>
        <select id="movie" value={selectedMovieIndex} onChange={handleMovieChange}>
          {movies.map((movie, index) => (
            <option key={index} value={index}>
              {`${movie.title} (RS.${movie.price})`}
            </option>
          ))}
        </select>
      </div>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <h2>Available</h2>
        </li>
        <li>
          <div className="seat selected"></div>
          <h2>Selected</h2>
        </li>
        <li>
          <div className="seat sold"></div>
          <h2>Sold</h2>
        </li>
      </ul>

      <div className="cont">
        <div className="screen"></div>
        {renderSeats()}
      </div>

      <p className="text">
        You have selected <span id="count">{selectedSeats.length}</span> seat
        for a price of RS.<span id="total">{calculateTotalPrice()}</span>
      </p>
<div className="ffr">
      <a><Link to="/Pay"><a><center><button onClick={handleConfirmPay}>Confirm Pay</button></center></a></Link></a>
    </div>
    </div>
  );
};

export default Seat;
