const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send(`
    <html>
      <body>
        Acme Movie API
      </body>
    </html>
  `);
});

module.exports = app;
