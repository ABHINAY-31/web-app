import { useEffect, useState } from "react";
import axios from "axios";
import '../CSS/Table.css'
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
        <tr key = {index} className="tr">
            <td className="td">{val.name}</td>
            <td className="td">{val.email}</td>
            <td className="td">{val.address}</td>
            <td className="td">{val.itemName}</td>
            <td className="td">{val.itemQuantity}</td>
            <td className="td">{val.mobileNumber}</td>
            <td className="td"> <button>Add</button> </td>
        </tr>
        )
    })
    return(
        <>
        <div className="my-table">
        <table className="table-1">
        <thead className="thead">
            <tr className="tr">
                <th className="th">Name</th>
                <th className="th">Email</th>
                <th className="th">Address</th>
                <th className="th">ItemName</th>
                <th className="th">ItemQuantity</th>
                <th className="th">MobileNumber</th>
            </tr>
        </thead>
        <tbody className="tbody">
            {tableData}
        </tbody>
        </table>
        </div>
        </>
    )
}
export default Table;
