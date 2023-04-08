import '../CSS/DetailsFill.css'
// import '../DataBaseConnection'
function Details(){
    
    return(
        <>
        <form method="post" action="/">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
                <input type="text" name="Name" class="form-control" autoComplete="false" id="exampleFormControlInput1" placeholder="Enter Your Name" required/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Item Name</label>
                <input type="text" name="ItemName" class="form-control" autoComplete="false" id="exampleFormControlInput2" placeholder="Enter Item Name" required/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Quantity</label>
                <input type="number" name="ItemQuantity" class="form-control" autoComplete="false"id="exampleFormControlInput3" placeholder="Enter Quantity" required/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                <input type="number" name="MobileNumber"class="form-control" autoComplete="false"id="exampleFormControlInput4" placeholder="Enter Your Number" required/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" name="Email" class="form-control" autoComplete="false" id="exampleFormControlInput5" placeholder="name@example.com" required/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                <textarea class="form-control" name="Address" autoComplete="false" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Address" required></textarea>
            </div>
            <div className="my-button">
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    );
}
export default Details;