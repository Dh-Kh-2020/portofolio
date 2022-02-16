const express = require("express");
const app = express();

app.set('view engine','ejs');
app.set('views', 'views');
app.listen(process.env.PORT || 3000);
app.use(express.static('public'));

console.log("server started");
app.get("/", (req, res)=>{
    res.render("index", {
        services: [
            {title: 'Fronend developing',   icon: 'uil uil-arrow',      description: 'I develop the user interface and web page.\nI also psition your company brand'},
            {title: 'Script writing',       icon: 'uil uil-edit',       description: 'Research and writing scripts for different topict.'},
            {title: 'Branding designing',   icon: 'uil uil-palette',    description: 'I develop the user interface and web page.\nI also psition your company brand'},
        ]
    });
});