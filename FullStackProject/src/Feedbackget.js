import React, {Component} from 'react';
import './Feedbackget.css';
import axios from 'axios';

class Feedbackget extends Component{
    state = {
        data:[]
    }
    componentDidMount() {
        axios.get('http://localhost:8080/getfeed')
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }

      render(){
        return (
          
            <div className="getch">
              <h1><center>Get</center></h1>
              <br></br><br></br>
            <table border={1}>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>recomendation</th>
                <th>rating</th>
                <th>comment</th>
                

              </tr>
            </thead>
            <tbody>
              {this.state.data.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.recommendation}</td>
                  <td>{user.rating}</td>
                  <td>{user.comment}</td>

                </tr>
              ))}
            </tbody>
          </table>
          </div>
          );
        }
}

export default Feedbackget;