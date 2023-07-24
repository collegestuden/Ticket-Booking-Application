import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'
export default function Admin() {
  return (

     <div className="the">
            <h1 className="lo">Admin Access</h1>
        <br></br><br></br>
            <br></br>
            <br></br>
            <br></br><br></br>
            <br></br>
            <br></br>
            <div className="but">
               <Link to="/Post"><button type="submit"> AddMovie</button> {" "}</Link> 
                <Link to="/Get"><button type="submit">ViewMovie</button>{" "}</Link>
               <Link to="/Put"><button type="submit">UpdateMovie</button>{" "}</Link>
                <Link to="/Delete"><button type="submit">DeleteMovie</button></Link>
            </div>
            <br></br><br></br><br></br>
            {/* <div classNmae="but">
            <Link to="/Feedbackget"><button type="submit">ViewFeedback</button> {" "}</Link>
            </div> */}
    </div>
  )
}
