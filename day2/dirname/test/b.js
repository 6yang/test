/**
 * Created by liuyang on 2017/6/23.
 */
var fs = require("fs");
fs.readFile(__dirname+"/1.txt",function(err,data){
   if(err){
       throw  err;
   }
   console.log(data.toString());
});