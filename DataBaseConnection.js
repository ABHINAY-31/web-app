const mongoose= require('mongoose');
const express = require('express')
const app=express()
const banks=require('./src/DBconnect/UserData')
const banking = mongoose.model('UserData',banks,'UserData');
const port = 3000
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://DonateBlood:Abhinay1234@cluster0.64p6kro.mongodb.net/UserDetails?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.warn("connected")
}).catch(()=>{
    console.warn("error")
});

// app.set("view engine" , "ejs")
app.get("/",(req,res) => {
    banking.find({})
    .then(data=>{
        res.render("./Table.js",{data})
        console.log(data);
    }).catch(error=>{
        console.log(error);
    })
})

// app.post("./",async (req,res) => {
//     // const user = req.body 
//     // console.log(req.body)
//     const user = new banking(req.body)
//     await user.save()
//     res.send("data saved")
//     res.redirect('/')
// })
app.listen(port, ()=>{
    console.log(`example app liestenig to ${port}`)
});
banking.find({})
.then(data=>{
    if (data.length === 0) {
        console.warn('No documents found');
    } else {
        
        console.warn(data);
    }
}).catch(err=>{
    console.error(err)
});


// const mongoose = require('mongoose')
// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const Schema = require('./src/DBconnect/Schema')
// const UserData = mongoose.model('Schema',Schema,'UserData')



// app.use(bodyParser.urlencoded({extended:true}));
// mongoose.connect('mongodb+srv://DonateBlood:Abhinay1234@cluster0.64p6kro.mongodb.net/UserDetails?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=>{
//     console.log('connected')
// }).catch(()=>{
//     console.log('error')
// });
// app.get('./',function(req,res){
//     // res.sendFile(__dirname + "./src/Component/DetailsFill")
//     console.log('express is working')
// })

// app.post('./src/Component/DetailsFill' , function(req,res){
//     // let newNote = new Note({
//     //     Name:req.body.Name,
//     //     ItemName:req.body.ItemName,
//     //     ItemQuantity: req.body.ItemQuantity,
//     //     MobileNumber:req.body.MobileNumber,
//     //     Email: req.body.Email,
//     //     Address: req.body.Address
//     // })
//     // newNote.save();
//     // res.redirect('./src/Component/DetailsFill');
//     console.log('express.working')
// })

// app.post(3000,function(){
//     console.log('server is running on 3000')
// })

// UserData.find({})
// .then(data => {
//     if(data.length==0){
//         console.log('no data available')
//     }else console.log(data)
// }).catch(error => {
//     console.log(error)
// })


