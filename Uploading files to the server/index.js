const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({dest:"uploads"});

app.set("view engine", "ejs");
app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.render("index");
});
 
app.post("/upload", upload.single("filedata"), function (req, res, next) {
   
    let filedata = req.file;
 
    console.log(filedata);
    if(!filedata)
        res.json({status: false, text: "Ошибка при загрузке файла"});
    else
        res.json({status: true, text: "Файл загружен"});
});

app.listen(3000);