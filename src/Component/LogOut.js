import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
export default function LogOut() {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const handleLogin = () => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/userdata");
                // console.log(response.data); // check the value of response.data
                setData((prevState) => [...prevState, ...response.data]);
                let value = response.data;
                console.log(value);
                console.log(userId);
                value.map((val) => {
                    console.log(val.email);
                    if(val.email === "abhinaysingh7457@gmail.com") {
                        console.log("done");
                        history.push('/detailsfill');
                        // navigate('/dashboard');
                    } 
                })
            } catch (error) {
                console.log(error);
            }
        };
        getData();
      };

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
          <h2>Login</h2>
          <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
            <input 
              type="text"
              placeholder="Enter ID"
              value="abhinaysingh7457@gmail.com"
              onChange={(e) => setUserId(e.target.value)}
            />
            <input 
              type="password"
              placeholder="Enter Password"
              value="val"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login

            </button>
          </form>
        </div>
      );
}

