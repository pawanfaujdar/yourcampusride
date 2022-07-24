const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const app =express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(express.static(path.join(__dirname, '/assets'))) 
app.use( express.static( "assets" ));


app.get('/', function(req,res){
    // res.send('its running');
    res.render('home');
});

app.listen(port,function(err){
    if(err){
        console.log('error in running');
    }
    else{
        console.log('running server at port :',port);
    }
})

module.exports = app