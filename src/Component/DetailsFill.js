import DetailsFill from '../CSS/DetailsFill.css'
function Details(){
    return(
        <>
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
                    <input type="text" class="form-control" autoComplete="false" id="exampleFormControlInput1" placeholder="Enter Your Name" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter Item Name</label>
                    <input type="text" class="form-control" autoComplete="false" id="exampleFormControlInput1" placeholder="Enter Item Name" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter Quantity</label>
                    <input type="number" class="form-control" autoComplete="false"id="exampleFormControlInput1" placeholder="Enter Quantity" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                    <input type="number" class="form-control" autoComplete="false"id="exampleFormControlInput1" placeholder="Enter Your Number" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" autoComplete="false" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                    <textarea class="form-control" autoComplete="false" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Address" required></textarea>
                </div>
                <div className="my-button">
                    <button >Submit</button>
                </div>
            </form>
        </>
    );
}
export default Details;