import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/BloodData.css"

function BloodData() {
  const [data, setData] = useState({data: []});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
        try {
          const response = await axios.get('https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=-1&districtCode=-1&bloodGroup=all&bloodComponent=11&lang=0&_=1682851160968');
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 120000); // fetch data every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
}, []);

if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

let allData;
if (data.data.length) {
    const temp = data.data.map((value) => {
        return value;
    })
    allData = temp.map((val) => {
        return (
        <tr key = {val[0]}>
            <td dangerouslySetInnerHTML={{ __html: val[0] }}></td>
            <td dangerouslySetInnerHTML={{ __html: val[1] }}></td>
            <td dangerouslySetInnerHTML={{ __html: val[2] }}></td>
            <td dangerouslySetInnerHTML={{ __html: val[3] }}></td>
            <td className="text-danger">LIVE</td>
            <td dangerouslySetInnerHTML={{ __html: val[5] }}></td>
        </tr>
        )
    })
}
return (
    <>
      <div className = "container">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Blood Bank</th>
              <th>Category</th>
              <th>Availability</th>
              <th>Last Updated</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{allData}</tbody>
        </table>
      </div>
    </>
  );
}

export default BloodData;
