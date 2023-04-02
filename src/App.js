import './App.css';
// when we do an npm start this particular section will resolve to what we view over the web
// it's a complete site
let name="abhinay";
function App() {
  return (
    // return only one not more than one
    // jsx fragment
    <> 
      <div className="my_navigation">
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              {/* <img src="" alt="" /> */}
              <a className="navbar-brand active" href="#">Home</a>
              <a className="navbar-brand" href="#">Blood Banks</a>
              <a className="navbar-brand" href="#">Availability</a>
              <a className="navbar-brand" href="#">Donation Camps</a>
            </div>
        </nav>
        <div className="card">
            <div className="card-val-1"></div>
            <div className="card-val-2"></div>
            <div className="card-val-3"></div>
        </div>
      </div>
    </>
      // <h1 className="my_name">Hello everyone</h1>
  );
}

export default App;
