// import React, { useState, useEffect } from 'react';
// //import '../assets/addbk.css';
// import axios from 'axios';
// //import '../assets/anavbar.css';
// //import Anavbar from '../pages/anavbar';
// import './Post.css';


// const Post = () => {
//   const [movie, setMovie] = useState('');
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState('');
//   const [district, setDistrict] = useState('');
//   const [theater, setTheater] = useState('');
//   const [imageurl, setImageurl] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     // Fetch existing books from the backend when the component mounts
//     fetchExistingBooks();
//   }, []);

//   const handleMovieChange = (event) => {
//     setMovie(event.target.value);
//   };

//   const handleTimeChange = (event) => {
//     setTime(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleDistrictChange = (event) => {
//     setDistrict(event.target.value);
//   };

//   const handleTheaterChange = (event) => {
//     setTheater(event.target.value);
//   };

//   const handleImageurlChange = (event) => {
//     setImageurl(event.target.value);
//   };

//   const fetchExistingBooks = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8181/get');
//       // Do something with the response, if needed
//     } catch (error) {
//       console.error('Error fetching existing books:', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       movie,
//       time,
//       date,
//       district,
//       theater,
//       imageurl,
//     };

//     // Check if the book with the same title and author already exists
//     try {
//       const response = await axios.get('http://localhost:8181/get', data);
//       const existingBooks = response.data;
//       const isDuplicate = existingBooks.some(
//         (book) => book.movie === movie && book.theater === theater
//       );

//       if (isDuplicate) {
//         setErrorMessage('This book already exists. Cannot add again.');
//       } else {
//         await axios.post('http://localhost:8181/post', data);
//         // Perform your API call to add the book to the backend here
//         // For example: axios.post('/api/books', data);

//         // Clear the form and error message after successful submission
//         setMovie('');
//         setTime('');
//         setDate('');
//         setDistrict('');
//         setTheater('');
//         setImageurl('');
//         setErrorMessage('');
//       }
//     } catch (error) {
//       console.error('Error fetching existing books:', error);
//     }
//   };

//   return (
//     <div>
      

//       <div className="App19">
        
//           <form className="form188" onSubmit={handleSubmit}>
//             <h2 className="add-head"> Add New Movies </h2>
//             <label className="label-cls">Movie</label>
//             <br />
//             <input
//               className="ip-cls"
//               type="text"
//               value={movie}
//               required
//               onChange={handleMovieChange}
//             />
//             <br />

//             <label className="label-cls">Time</label>
//             <br />
//             <input
//               className="ip-cls"
//               type="text"
//               value={time}
//               required
//               onChange={handleTimeChange}
//             />
//             <br />

//             <label className="label-cls">Date</label>
//             <br />
//             <input
//               className="ip-cls"
//               type="date"
//               value={date}
//               required
//               onChange={handleDateChange}
//             />
//             <br />

//             <label className="label-cls">District</label>
//             <br />
//             <input
//               className="ip-cls"
//               type="text"
//               value={district}
//               required
//               onChange={handleDistrictChange}
//             />
//             <br />

//             <label className="label-cls">Theater</label>
//             <br />
//             <input
//               className="ip-cls"
//               type="text"
//               value={theater}
//               required
//               onChange={handleTheaterChange}
//             />
//             <br />

//             <label className="label-cls">Imageurl</label>
//             <br />
//             <input
//               className="ip-cls"
//               type="text"
//               value={imageurl}
//               required
//               onChange={handleImageurlChange}
//             />
//             <br />
//             <br />
//             <button className="add-btn" type="submit">
//               Add
//             </button>
//           </form>
//           {errorMessage && <p>{errorMessage}</p>}
        
//       </div>
//     </div>
//   );
// };

// export default Post;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Post.css';

const Post = () => {
  const [movie, setMovie] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [district, setDistrict] = useState('');
  const [theater, setTheater] = useState('');
  const [imageurl, setImageurl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   // Fetch existing movies from the backend when the component mounts
  //   fetchExistingMovies();
  // }, []);

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleTheaterChange = (event) => {
    setTheater(event.target.value);
  };

  const handleImageurlChange = (event) => {
    setImageurl(event.target.value);
  };

  const fetchExistingMovies = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8181/get',);
      // Do something with the response, if needed
    } catch (error) {
      console.error('Error fetching existing movies:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      movie,
      time,
      date,
      district,
      theater,
      imageurl,
    };

    const token = localStorage.getItem('token');

    // Check if the token is available and valid
    

    // Check for duplicate entries and then submit the data
    try {
      const response = await axios.post('http://localhost:8181/post', data,{
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the request headers
        }
      })

      

        // Clear the form and error message after successful submission
        setMovie('');
        setTime('');
        setDate('');
        setDistrict('');
        setTheater('');
        setImageurl('');
        setErrorMessage('');
        
        alert('Data is posted');
      }
     catch (error) {
      console.error('Error fetching existing movies:', error);
    }
  };

  return (
    <div>
      <div className="App19">
        <form className="form188" onSubmit={handleSubmit}>
          <h2 className="add-head"> Add New Movies </h2>
          <label className="label-cls">Movie</label>
          <br />
          <input
            className="ip-cls"
            type="text"
            value={movie}
            required
            onChange={handleMovieChange}
          />
          <br />

          <label className="label-cls">Time</label>
          <br />
          <input
            className="ip-cls"
            type="text"
            value={time}
            required
            onChange={handleTimeChange}
          />
          <br />

          <label className="label-cls">Date</label>
          <br />
          <input
            className="ip-cls"
            type="date"
            value={date}
            required
            onChange={handleDateChange}
          />
          <br />

          <label className="label-cls">District</label>
          <br />
          <input
            className="ip-cls"
            type="text"
            value={district}
            required
            onChange={handleDistrictChange}
          />
          <br />

          <label className="label-cls">Theater</label>
          <br />
          <input
            className="ip-cls"
            type="text"
            value={theater}
            required
            onChange={handleTheaterChange}
          />
          <br />

          <label className="label-cls">Imageurl</label>
          <br />
          <input
            className="ip-cls"
            type="text"
            value={imageurl}
            required
            onChange={handleImageurlChange}
          />
          <br />
          <br />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Post;
