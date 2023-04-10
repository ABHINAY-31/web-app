import { useEffect, useState } from "react";
import axios from "axios";

function Table(){
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/userdata");
            console.log(response.data); // check the value of response.data
            setData((prevState) => [...prevState, ...response.data]);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        getData();
    }, [])
    
    const tableData = data.map((val, index) => {
        return (
        <tr key = {index}>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.address}</td>
            <td>{val.itemName}</td>
            <td>{val.itemQuantity}</td>
            <td>{val.mobileNumber}</td>
            <td> <button>Add</button> </td>
        </tr>
        )
    })
    return(
        <>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>ItemName</th>
                <th>ItemQuantity</th>
                <th>MobileNumber</th>
            </tr>
        </thead>
        <tbody>
            {tableData}
        </tbody>
    </table>
        </>
    )
}
export default Table;
