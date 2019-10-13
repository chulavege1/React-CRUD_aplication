// Add React libery for project
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Add React components
import UserRegistration from "./components/add-user.component";
import EditUserSettings from "./components/change-settings.component";
import Aplication from "./components/application.comp"
// ES6 import source workers
// Code some -~> import bacgroundHeader from "Some of your pc url"

class App extends React.Component {
render() {
    return (
// Render main website header
        <Router>
            <div className='container'>
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <Link to="/" className='btn btn-home'>Home</Link>
                    <a className='navbar-brand' target='_blank'>
                        <img src='https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png' width='100' height='90'></img>
                    </a>
                    <div className='collpase nav-collapse'>
                        <ul className='navbar-nav mr-auto'>
                            <li>
                                <Link to="/registration" className='btn btn-primary'>Add user</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Aplication}></Route>
                <Route path='/registration' component={UserRegistration}></Route>
                <Route path='/change-setting' component={EditUserSettings}></Route>
            </div>
        </Router>
    )
};
};
//!--END--! Render main website header

// Execute Render main website header in DOM tag -~>
ReactDOM.render(<App />, document.getElementById('root'));




