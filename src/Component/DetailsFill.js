import "../CSS/DetailsFill.css";
import { useState } from "react";
// import '../DataBaseConnection'
import axios from "axios";

function Details() {
    const [name, setName] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
        name: name,
        itemName: itemName,
        itemQuantity: Number(itemQuantity),
        mobileNumber: Number(mobileNumber),
        email: email,
        address: address,
    };
    try {
        const response = await axios.post(
            "http://localhost:5000/userdata/add",
            userData
        );
        alert('data is added into the database')
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
    setName("");
    setItemName("");
    setItemQuantity("");
    setMobileNumber("");
    setEmail("");
    setAddress("");
  };

  return (
    <>
        <form method="post" action="/" autoComplete="off">
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Your Name
            </label>
            <input
                type="text"
                name="Name"
                className="form-control"
                autoComplete="off"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
                Enter Item Name
            </label>
            <input
                type="text"
                name="ItemName"
                className="form-control"
                autoComplete="off"
                id="exampleFormControlInput2"
                placeholder="Enter Item Name"
                required
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
                Enter Quantity
            </label>
            <input
                type="number"
                name="ItemQuantity"
                className="form-control"
                autoComplete="off"
                id="exampleFormControlInput3"
                placeholder="Enter Quantity"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                required
        />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
                Mobile Number
            </label>
            <input
                type="number"
                name="MobileNumber"
                className="form-control"
                autoComplete="off"
                id="exampleFormControlInput4"
                placeholder="Enter Your Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
        />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
                Email address
            </label>
            <input
                type="email"
                name="Email"
                className="form-control"
                autoComplete="off"
                id="exampleFormControlInput5"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
                Address
            </label>
            <textarea
                className="form-control"
                name="Address"
                autoComplete="off"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter Your Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            ></textarea>
        </div>
        <div className="my-button">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default Details;
