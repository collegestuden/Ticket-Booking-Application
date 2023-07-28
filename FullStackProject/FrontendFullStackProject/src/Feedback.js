import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitFeedback } from './formFeedbackActions';
import './Feedback.css';
import axios from 'axios';

const Feedback = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [rating, setRating] = useState(''); // Initialize with an empty string
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation - Check if required fields are filled
    if (!name || !email || !recommendation || !rating) {
      alert('Please fill in all required fields.');
      return;
    }

    const feedbackData = {
      name,
      email,
      recommendation,
      rating,
      comment,
    };

    // Dispatch the submitFeedback action
    props.submitFeedback(feedbackData);

    // Axios POST request to submit feedback data
    axios.post('http://localhost:9015/api/v1/feed/feed', feedbackData)
      .then((response) => {
        // Handle the response if needed (e.g., show a success message)
        alert('Feedback submitted successfully:', response.data);
      })
      .catch((error) => {
        // Handle errors if the request fails (e.g., show an error message)
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div>
      <div className="feedbackFormContainer">
        <form id="form" onSubmit={handleSubmit}>
          <div className="formField">
            <h1>Feedback</h1>
            <label htmlFor="name" className="label-name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="formField">
            <label htmlFor="email" className="label-email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="formField">
            <label htmlFor="recommendation" className="label-email">
              Would you recommend your friend
            </label>
            <input
              type="text"
              id="recommendation"
              placeholder="yes or no"
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
            />
          </div>

          <div className="formField">
            <label htmlFor="rating" className="label-email">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="formField">
            <label htmlFor="comment">Any comments or suggestions</label>
            <textarea
              type="text"
              id="comment"
              placeholder="Enter your comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="submitButton" value="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  submitFeedback,
};

export default connect(null, mapDispatchToProps)(Feedback);










// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { submitFeedback } from './formFeedbackActions';
// import './Feedback.css';
// import axios from 'axios';

// const Feedback = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [recommendation, setRecommendation] = useState('');
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const feedbackData = {
//       name,
//       email,
//       recommendation,
//       rating,
//       comment,
//     };

//     // Axios POST request to submit feedback data
//     axios.post('http://localhost:9015/api/v1/feed/feed', feedbackData)
//       .then((response) => {
//         // Handle the response if needed (e.g., show a success message)
//         alert('Feedback submitted successfully:', response.data);
//       })
//       .catch((error) => {
//         // Handle errors if the request fails (e.g., show an error message)
//         console.error('Error submitting feedback:', error);
//       });
//   };

//   return (
//     <div>
//       <div className="feedbackFormContainer">
//         <form id="form" onSubmit={handleSubmit}>
//           <div className="formField">
//             <h1>Feedback</h1>
//             <label htmlFor="name" className="label-name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="formField">
//             <label htmlFor="email" className="label-email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="formField">
//             <label htmlFor="recommendation" className="label-email">
//               Would you recommend your friend
//             </label>
//             <input
//               type="text"
//               id="recommendation"
//               placeholder="yes or no"
//               value={recommendation}
//               onChange={(e) => setRecommendation(e.target.value)}
//             />
//           </div>
          
//           <div className="formField">
//             <label htmlFor="rating" className="label-email">
//               Rating
//             </label>
//             <input
//               type="text"
//               id="rating"
//               placeholder="Rating"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//             />
//           </div>
          
//           <div className="formField">
//             <label htmlFor="comment">Any comments or suggestions</label>
//             <textarea
//               type="text"
//               id="comment"
//               placeholder="Enter your comment here"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             ></textarea>
//           </div>

//           <button type="submit" className="submitButton" value="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Feedback;

