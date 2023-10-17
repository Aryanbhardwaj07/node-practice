const express = require('express')
const app = express()

//add as many middlewares you want but make sure you run next() after every middleware
app.use(function(req,res,next){
  console.log("heelo from middleware");
  next();
})
app.get("/", function (req, res) {
  res.send('Hello World')
})
app.get('/profile',function(req,res){
  res.send("hello from profile");
})

app.listen(3000)