import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const Home = () =>{
    return (
        <>
            <div className="my-view">
            <div className="card-description">
                <p>Spread love everywhere you go. Let no one ever come to you without leaving happier. </p>
            </div>
            <div className="inside-box-card">
                <div className="card">
                    <div className="card-val-1">
                      <div className="card-desc-1">Blood Donation</div>
                    </div>
                    <div className="card-val-2">
                      <div className="card-desc-2">Donation Camps</div>
                    </div>
                    <div className="card-val-3">
                      <div className="card-desc-3">Blood Availability</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-view">
            <div className="blood-type-view">
              <table cellPadding="10" cellSpacing="20">
                <thead>
                  <tr>
                    <th>Blood Type</th> 
                    <th>Donate Blood to</th>
                    <th>Receive Blood From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A+</td>
                    <td>A+ AB+</td>
                    <td>A+ A- O+ O-</td>
                  </tr>
                  <tr>
                    <td>O+</td>
                    <td>O+ A+ B+ AB+</td>
                    <td>O+ O-</td>
                  </tr>
                  <tr>
                    <td>B+</td>
                    <td>B+ AB+</td>
                    <td>B+ B- O+ O-</td>
                  </tr>
                  <tr>
                    <td>AB+</td>
                    <td>AB+</td>
                    <td>Everyone</td>
                  </tr>
                  <tr>
                    <td>A-</td>
                    <td>A+ A- AB+ AB-</td>
                    <td>A- O-</td>
                  </tr>
                  <tr>
                    <td>O-</td>
                    <td>Everyone</td>
                    <td>O-</td>
                  </tr>
                  <tr>
                    <td>B-</td>
                    <td>B+ B- AB+ AB-</td>
                    <td>B- O-</td>
                  </tr>
                  <tr className="last-one">
                    <td>AB-</td>
                    <td>AB+ AB-</td>
                    <td>AB- A- B- O-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="image-view">
              <div className="image"></div>
              <div className="content">Donate blood, donate life! Donate blood, save life! Donate blood, give a smile to someone. <br /> Donate blood and gift someone a precious life.</div>
            </div>
        </div> 

        <div className="blood-detail-donor">
          <h1 className="donor-heading">Types Of Donation</h1>
          <p>The human body contains five liters of blood, which is made of several useful components i.e. <b>Whole blood</b> , <b>Platelet</b> , and <b>Plasma</b>.</p> <br />
          <p>Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make.</p> <br/>
          <p>For <b>plasma</b> and <b>platelet</b> donation you must have donated whole blood in past two years.</p> <br />
        </div>
        </>
    )
}

export default Home;