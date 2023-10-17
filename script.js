const express = require('express')
const app = express()


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