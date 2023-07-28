// // // import React from 'react'
// // // import {Link} from 'react-router-dom';
// // // import './Home.css';
// // // import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
// // // import { selectUser } from './redux/userSlice';

// // // function Profile() {
// // //     const user=useSelector(selectUser);
// // //   return (
// // //         <div className="body">
// // //             <h1>{user.name}</h1>
      
// // //         </div>
        

// // //   )
// // // }
// // // export default Profile;
// // import React from 'react';
// // import { useSelector } from 'react-redux';
// // import { selectUser } from './redux/userSlice';
// // import './Profile.css'

// // function Profile() {
// //     const user = useSelector(selectUser);

// //     return (
// //         <div className="jjjjt">
// //             <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="User Avatar" className="oiprt"/>
// //             <div className="rtrt">
// //             <h2 >Hi User,</h2>
// //             </div>
// //             <div className="ytyt">
// //             <h2>Glad to Welcome!!</h2>
// //             </div>
// //             <h1>{user.name}</h1>
// //             <p>{user.email}</p>
// //             </div>
            
        
// //     );
// // }

// // export default Profile;
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectUser } from './redux/userSlice';
// import './Profile.css';

// function Profile() {
//     const user = useSelector(selectUser);

//     return (
//         <div className="user-box">
//             <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="User Avatar" className="oiprt" />
//             <div className="rtrt">
//                 <h2>Hi User,</h2>
//             </div>
//             <div className="ytyt">
//                 <h2>Glad to Welcome!!</h2>
//             </div>
//             <div className="user-info">
//                 <h1>{user.name}</h1>
//                 <p>{user.email}</p>
//             </div>
//         </div>
//     );
// }

// export default Profile;
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import './Profile.css';

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="centered-box">
      <div className="user-box">
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="User Avatar" className="oiprt" />
        <div className="rtrt">
          <h2>Hi User,</h2>
        </div>
        <div className="ytyt">
          <h2>Glad to Welcome!!</h2>
        </div>
        <div className="user-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;


