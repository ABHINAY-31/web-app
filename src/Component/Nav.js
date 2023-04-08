// import React from react;
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
const Nav = () =>{
    return(
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="menu-icon" href="#" target="_blank"></Link>
                    <Link className="navbar-brand active" to="/">Home</Link>
                    <Link className="navbar-brand" to="/detailsfill">Blood Banks</Link>
                    <Link className="navbar-brand" to="/Table">Availability</Link>
                    <Link className="navbar-brand" href="#">Donation Camps</Link>
                </div>
        </nav>
        </>
    )
}
export default Nav;