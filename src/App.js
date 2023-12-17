import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import Nav from './Component/Nav'
import DetailsFill from './Component/DetailsFill';
import Home from './Component/Home'
import Table from './Component/Table'
import BloodData from './Component/BloodData';
// import ApiDataTable from ''
// import detailFill from './Component/detailFill'
// import './Component/navbar.js'
// when we do an npm start this particular section will resolve to what we view over the web
// it's a complete site

function App() {
  return (
    // return only one not more than one
    // jsx fragment
    // done
    <> 
      <div className="my_navigation">
        <Router>
          <Nav/>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path="/DetailsFill">
                <DetailsFill/>
              </Route>
              <Route path="/Table">
                <Table/>
              </Route>
              <Route path="/ApiDataTable">
                <Table/>
              </Route>
              <Route path = "/blooddata">
                <BloodData/>
              </Route>
            </Switch>
        </Router>
      </div>
    </>
      // <h1 className="my_name">Hello everyone</h1>
  );
}

export default App;
