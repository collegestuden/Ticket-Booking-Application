import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitFeedback } from './formFeedbackActions';
import './Feedback.css';

const Feedback = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [rating, setRating] = useState([]);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      email,
      recommendation,
      rating,
      comment,
    };

    // Dispatch the submitFeedback action
    props.submitFeedback(feedbackData);
  };

  return (
    <div>
      <div className="feedbackFormContainer">
        <h1>Feedback</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="formField">
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
            <label>Would you recommend Us to a friend?</label>
            <label htmlFor="recommend-1">
              <input
                type="radio"
                id="recommend-1"
                name="recommend"
                value="Yes"
                checked={recommendation === 'Yes'}
                onChange={(e) => setRecommendation(e.target.value)}
              />
              Yes
            </label>
            <label htmlFor="recommend-2">
              <input
                type="radio"
                id="recommend-2"
                name="recommend"
                value="No"
                checked={recommendation === 'No'}
                onChange={(e) => setRecommendation(e.target.value)}
              />
              No
            </label>
            <label htmlFor="recommend-3">
              <input
                type="radio"
                id="recommend-3"
                name="recommend"
                value="Maybe"
                checked={recommendation === 'Maybe'}
                onChange={(e) => setRecommendation(e.target.value)}
              />
              Maybe
            </label>
          </div>

          <div className="formField">
            <label>
              How many ratings are you giving us?
              <small>(Check all that apply)</small>
            </label>
            <label htmlFor="rating-1">
              <input
                type="checkbox"
                name="rating"
                value="*"
                checked={rating.includes('*')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              *
            </label>
            <label htmlFor="rating-2">
              <input
                type="checkbox"
                name="rating"
                value="**"
                checked={rating.includes('**')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              **
            </label>
            <label htmlFor="rating-3">
              <input
                type="checkbox"
                name="rating"
                value="***"
                checked={rating.includes('***')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              ***
            </label>
            <label htmlFor="rating-4">
              <input
                type="checkbox"
                name="rating"
                value="****"
                checked={rating.includes('****')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              ****
            </label>
            <label htmlFor="rating-5">
              <input
                type="checkbox"
                name="rating"
                value="*****"
                checked={rating.includes('*****')}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRating([...rating, e.target.value]);
                  } else {
                    setRating(rating.filter((item) => item !== e.target.value));
                  }
                }}
              />
              *****
            </label>
          </div>

          <div className="formField">
            <label htmlFor="comment">Any comments or suggestions</label>
            <textarea
              name="comment"
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
