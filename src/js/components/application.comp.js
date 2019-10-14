import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class Aplication extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.userRegistrInfo === undefined){
            this.userNotFound = ('User data ' + this.userRegistrInfo + '!');
        }
        else {
            return (
                    this.takeObjUser = JSON.parse(localStorage.userRegistrInfo),
                    this.getUserName = this.takeObjUser.user_name,
                    this.getUserSurName = this.takeObjUser.user_surname,
                    this.getUserPhone = this.takeObjUser.user_phone,
                    this.getUserEmail = this.takeObjUser.user_email
                    )
    } 
}
// User data delete
     deleteUserData(){
        localStorage.removeItem('userRegistrInfo');
        location.reload();
    }
    
    render() {
        return (
            <div className="hes-work">
                <div className="user-name">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.getUserName}</td>
                                <td>{this.getUserSurName}</td>
                                <td>{this.getUserPhone}</td>
                                <td>{this.getUserEmail}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 className='user-not-found'>{this.userNotFound}</h1>
                    <div className='navbar-item'>
                    <li className='btn'>
                        <Link to="/registration" className='btn btn-primary'>Edit</Link>
                    </li>
                    <li>
                    <label>Need Import JSON? </label>
                        <input type='button'
                               className='form-control'></input>
                    </li>
                    <Route path='/registration'></Route>
                    <li className='btn'>
                        <button onClick={this.deleteUserData}
                                className='btn btn-primary'>Delete user</button>
                    </li>
                    </div>
                </div>
            </div>

        )
    }
}
export default Aplication