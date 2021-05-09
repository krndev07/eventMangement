var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
const router = require('./routes/event.js');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.get('/', (req, res)=>{ 
    res.render('index'); 
    });
router.get('/eventupdate', (req, res)=>{ 
    res.render('eventupdate'); 
    });
router.get('/eventdelete', (req, res)=>{ 
    res.render('eventdelete'); 
    });

app.use('/event', router);
app.listen(port, () => {
console.log("Server listening on port " + port);
})


