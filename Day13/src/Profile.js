import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './redux/userSlice';

function Profile() {
    const user=useSelector(selectUser);
  return (
        <div className="body">
            <h1>{user.name}</h1>
      
        </div>
        

  )
}
export default Profile;