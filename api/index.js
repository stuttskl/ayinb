let express = require('express');
let app = express();
let bodyParser = require('body-parser');
var cors = require('cors');
let PORT = process.env.PORT || 8080;

var bookRoutes = require('./routes/books');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello from the other side");
});

app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});