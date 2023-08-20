const express = require("express")
const bodyparser = require('body-parser')


const app =  express()

app.use(bodyparser.urlencoded({extended:false}))

 app.use(express.static('public'))


app.get('/',function(req,res){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    console.log("Day: " +day)
    let h = d.getHours()
    console.log('Hours : ' + h)
    // if(day==='Sunday' || day==="Saturday"){
    //     res.sendFile(__dirname + '/views/404.html')
    // }else{
    //     if(h>9 && h<=17){
    //         res.sendFile(__dirname + '/views/home.html')
    //     }else{
    //         res.sendFile(__dirname + '/views/404.html')
    //     }
    // }

    res.sendFile(__dirname + '/views/home.html')
   
})

app.get('/contact',function(req,res){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    console.log("Day: " +day)
    let h = d.getHours()
    console.log('Hours : ' + h)
    if(day==='Sunday' || day==="Saturday"){
        res.sendFile(__dirname + '/views/404.html')
    }else{
        if(h>9 && h<=17){
            res.sendFile(__dirname + '/views/contact.html')
        }else{
            res.sendFile(__dirname + '/views/404.html')
        }
    }
})

app.get('/services',function(req,res){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    console.log("Day: " +day)
    let h = d.getHours()
    console.log('Hours : ' + h)
    if(day==='Sunday' || day==="Saturday"){
        res.sendFile(__dirname + '/views/404.html')
    }else{
        if(h>9 && h<=17){
            res.sendFile(__dirname + '/views/services.html')
        }else{
            res.sendFile(__dirname + '/views/404.html')
        }
    }
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})