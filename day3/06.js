/**
 * Created by liuyang on 2017/6/25.
 */
var  express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("form");
});
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/",function(req,res){
    console.log(req.body);
    res.send();
});

app.listen(3000);
