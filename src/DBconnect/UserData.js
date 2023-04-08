const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    Name:String,
    Email:String,
    Address:String,
    ItemName:String,
    ItemQuantity:String,
    MobileNumber:String
});
// module.export = mongoose.model('bank',userSchema)
module.exports=userSchema