var express = require("express");
var app = express()
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://GeorgeKid:shi19941211@ds149309.mlab.com:49309/coj")
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", indexRouter);
app.use("/api/v1", restRouter);

app.get('/', function(req, res){
  res.send("Hello, Express World Agn!")
})

app.listen(3000, function(){
  console.log("Example app listening on port 3000!")
})
