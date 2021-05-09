var express = require('express');
var router = express.Router();
var pool = require('./database.js');
router.post("/addEvent", (req, res) => {
  pool.connect().then(client => {
      client.query(`INSERT INTO events(firstname,lastname,venue,eventdate,eventtype) VALUES($1, $2, $3, $4, $5)`,[req.body.firstname,req.body.lastname,req.body.venue,req.body.eventdate,req.body.eventtype],(err, res) => {
          if (err) {
              console.error(err);
              client.release();
          }
          console.log('Data insert successful');
          client.release();
      });
});
});
router.get("/Event", (req, res) => {
    pool.connect().then(client => {
        client.query(`select * from events`,(err, request) => {
            if (err) {
                console.error(err);
                client.release();
            }
            res.send(request.rows);
            client.release();
        });
  });
  });
router.get("/Event/:id", (req, res) => {
    pool.connect().then(client => {
        client.query(`select * FROM events WHERE id = $1`,[req.params.id],(err, request) => {
            if (err) {
                console.error(err);
                client.release();
                return;
            }
            res.send(request.rows);
            client.release();
        });
  });
});
router.post("/deleteEvent",(req, res)=> {
  
    pool.connect().then(client => {
      client.query(`DELETE FROM events WHERE id = $1`,[req.body.id],(err, res) => {
          if (err) {
              console.error(err);
              client.release();
          }
          console.log('Data removed from database');
          client.release();
      });
  });
});
    
router.post("/updateEvent",(req, res)=> {
  
    pool.connect().then(client => {
      client.query(`UPDATE events SET id =$1 WHERE id = $2`,[req.body.venue,req.body.id],(err, res) => {
          if (err) {
              console.error(err);
              client.release();
          }
          
          console.log('updated');
          client.release();
      });
  });
});
module.exports = router;