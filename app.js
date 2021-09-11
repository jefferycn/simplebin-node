const express = require('express'),
  fs = require('fs/promises'),
  app = express(),
  port = 3000;
app.use(express.json());

app.get('/', async (req, res) => {
  const data = await fs.readFile(`${__dirname}/bin/default.txt`);
  res.setHeader('content-type', 'text/plain');
  res.send(data);
});

app.post('/', (req, res) => {
  if (req.body && req.body.data) {
    fs.writeFile(`${__dirname}/bin/default.txt`, req.body.data).then(() =>
      console.log('data saved.'));
  }
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Bin listening at http://localhost:${port}`);
});
