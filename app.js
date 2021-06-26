const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const dataInfo = require('./models/deviceinfo')
app.set('view engine','ejs') 
app.set('views','views')

//database name --devicedata and collection --deviceinfo atlas ka 
//user id neiot_project,pass neiot_project.
//url -mongodb+srv://neiot_project:<password>@cluster0.5bh3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(bodyParser.urlencoded({extended: false})) //Post Body Parser
//mongoose.connect("mongodb://127.0.0.1:27017/devicedata",{useNewUrlParser: true,useUnifiedTopology: true})
mongoose.connect('mongodb+srv://neiot_project:neiot_project@cluster0.5bh3i.mongodb.net/devicedata?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("connect database"))
.catch(err => console.log(err))


//important
// dataInfo.find({},(err,results)=>{
//     if(err) throw err;
//     console.log(results);
// })




app.get('/',(req,res)=>{
    res.render('index')
})


// app.post('/saveData',(req,res)=>{
//    // res.render('index')
//     let newData = new Deviceinfo({
//         deviceid: req.body.deviceid,
//         batteryvolt: req.body.batteryvolt,
//         solarvolt: req.body.solarvolt

//     });
//     newData.save();
// })

// app.post('/saveData', (req,res,next)=>{
//      var deviceDeatils = new dataInfo({
//          deviceid: req.body.deviceid,
//          batteryvolt: req.body.batteryvolt,
//          solarvolt: req.body.solarvolt
//       })
      //console.log(deviceDeatils);
     // deviceDeatils.save()
      //res.redirect('index')
     //})

//important

app.post('/saveData', (req,res,next)=>{
 var deviceDeatils = new dataInfo({
    deviceid: req.body.deviceid,
    batteryvolt: req.body.batteryvolt,
    solarvolt: req.body.solarvolt
 })
 console.log(deviceDeatils);
 deviceDeatils.save()
 //res.redirect('index')
})

app.get('/showdata',(req,res)=>{
    //res.render('results')
    dataInfo.find({},(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.render('results',{
            deviceList: results
        })
    })
})


app.listen(7060);