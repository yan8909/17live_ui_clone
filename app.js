var express = require("express"),
    app = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/purches", function(req, res){
   res.render("purches"); 
});

app.get("/leadboard", function(req, res) {
    res.render("leadboard");
});

app.get("/17tv", function(req, res) {
    res.render("tv");
});

app.get("/live", function(req, res) {
    res.render("live");
});


app.listen(8000, function(){
    console.log("server started!!");
});