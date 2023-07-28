import React from 'react';
import { Link } from 'react-router-dom';
import './First.css';
import './Login';

export default function First() {
  return (
    <div>
      <h1 className="ty">Book Your Movie Tickets</h1>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="ki">
        <Link to="/Login"><button style={{ margin: '20px' }}>User</button></Link>
        <Link to="/AdminLogin"><button style={{ margin: '10px' }}>Admin</button></Link>
      </div>
    </div>
  );
}
