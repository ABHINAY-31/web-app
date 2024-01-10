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
                    <Link className="menu-icon" to = "/"></Link>
                    <Link className="navbar-brand active" to="/">Home</Link>
                    <Link className="navbar-brand" to="/detailsfill">Contact Us</Link>
                    <Link className="navbar-brand" to="/Table">Display Data</Link>
                    <Link className="navbar-brand" to="/BloodData" onClick={()=> alert("wait for 1 minute . . . API is")}>Donation Camps</Link>
                </div>
            </nav>
        </>
    )
}
export default Nav;