const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const routes = require('./routes/routes')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', routes);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
