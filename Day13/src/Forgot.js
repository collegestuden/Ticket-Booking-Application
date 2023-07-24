import React, { useState } from 'react';
import './Forgot.css';
const Forgot = () => {
  const [email, setEmail] = useState('');
  const [password, setNew] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to handle the forgot password functionality
    // For example, you can make an API call to send a password reset email
    console.log('Forgot password submitted:', email);
  };

const myFunction=()=> {
  alert("Hello! I am an alert box!");
}


  return (
    <div>
      <br></br>
      <br></br>
      <h1 className="kui"><center><b>Forgot Password</b></center></h1>
      <div className="col">
        <div className="change">
      <form onSubmit={handleSubmit}>
        <label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h1>Email</h1>
        <br></br>
          <input
            type="email"
            value={email}
            placeholder="abc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
            <br></br>
            
          <h1>NewPassword:</h1>
          <br></br>
          <br></br>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setNew(e.target.value)}
          />
        </label>
        <label>
            <br></br>
            
          <h1>ConfirmPassword:</h1>
          <br></br>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setNew(e.target.value)}
          />
        </label>
        <button onclick={myFunction}>Reset Password</button>

      </form>
      </div>
      </div>
    </div>
  );
};

export default Forgot;
