// import axios from "axios";
// import React, { useState } from "react";
// import './Delete.css'

// function Delete() {
//   const [taskId, setSearch] = useState("");

//   const searchid = (evt) => {
//     if (evt.key === "Enter") {
//       axios.delete(`http://127.0.0.1:8181/delete/${taskId}`)
//         .then(response => {
//           console.log("Movie deleted successfully!");
//           // You can add further logic or update state if needed
//         })
//         .catch(err => {
//           console.log(err);
//           // Handle the error if the delete request fails
//         });
//     }
//   }

//   return (
//     <div className="tt">
//       <div className="ccc">
//         <h1 id="dels">Delete a movie </h1>
//         <div className="">
//           <input
//             type="text"
//             className="k"
//             placeholder="Enter the Id"
//             value={taskId}
//             onChange={e => setSearch(e.target.value)}
//             onKeyPress={searchid}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Delete;
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
//import './Createtask.css';
import './Delete.css';
const Delete = () => {
  const [taskId, setTaskId] = useState('');
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  const handleDelete = () => {
    // Check if the token is available and valid
    if (!token) {
      console.log('No token found. Redirect to login page or handle the error.');
      // Redirect to the login page or handle the error
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the request headers
      },
    };

    axios.delete(`http://127.0.0.1:8181/delete/${taskId}`, config)
      .then((response) => {
        // Handle success
        console.log(response);
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className="bgi">
      <h1>Delete Movie</h1>
            <Link to="/HomePage" className="arrow-top-left">&#8672;</Link>      

      <div className="appcontainer">
        

        <div className="task-container">
          <div className="box">
            <div className="input-container">
              <div className="task-info">
                <div>
                  <span className="task-label">Movie ID:</span>
                  <input
                    type="number"
                    value={taskId}
                    onChange={(e) => setTaskId(e.target.value)}
                  />
                </div>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;