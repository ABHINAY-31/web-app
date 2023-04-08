// import '../DataBaseConnection'
function Table(){
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
            {data.map((y)=>{
                <tr>
                <td>{y.Name}</td>
                <td>{y.Email}</td>
                <td>{y.Address}</td>
                <td>{y.ItemName}</td>
                <td>{y.ItemQuantity}</td>
                <td>{y.MobileNumber}</td>
                <td> <button>Add</button> </td>
            </tr>
            })}
        </tbody>
    </table>
        </>
    )
}
export default Table;