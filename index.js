const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helm = require('helm');
const app = express()
const port = 3000
const routes = require('./routes/routes')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', routes);

app.use(function(req, res, next){
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.status(404).send({ url: `Route '${req.url}' with requested method not found`});
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

app.use(helm);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;