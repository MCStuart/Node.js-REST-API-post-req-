const express = require('express'),
  app = express(),
  port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log('Your server is now running on port ' + port))

app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }));

app.post('/myName', (req, res) => {
  console.log(req.body);
  res.send(`Hello, ${req.body.firstName} ${req.body.lastName}. You now have successfully POSTed to a web server!` )
})