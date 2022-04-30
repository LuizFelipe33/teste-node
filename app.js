const express = require("express");
const app = express();

app.get("/", function (req, res){ 

    res.sendFile(__dirname+"/html/index.html")

});

app.get("/ola/:nome/:profissao/:sla", function (req, res){
    res.send(req.params)
})

var SomarFunc = require("./functions/somar")
var SubFunc = require("./functions/sub")
var MultFunc = require("./functions/multi")
var DivFunc = require("./functions/div")
const res = require("express/lib/response")

console.log(SomarFunc(1,2))
console.log(SubFunc(2,4))
console.log(MultFunc(2,4))
console.log(DivFunc(2,4))

app.listen(8081, function(){

    console.log("servidor rodando")

});