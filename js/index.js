var express=require("express");
var fs=require("fs");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({}))
app.listen(8000);
app.post("/cha",function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	fs.readFile("data.txt","utf8",function(err,data){
		// console.log(data)
		res.send(data)
	})

})
app.post("/list",function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	var id=req.body.id;
	console.log(id)
	fs.readFile("data.txt","utf8",function(err,data){
		// console.log(data)
		var json=JSON.parse(data)
		console.log(json);
		for(i in json){
			if(json[i].id==id){
				res.send(json[i])
			}
		}
	})

})

