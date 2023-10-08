const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'varun123@',
  database: 'vehicle'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/vehicles', (req, res) => {
  const { type, make, model, year } = req.body;

  const sql = 'INSERT INTO vehicles (type, make, model, year) VALUES (?, ?, ?, ?)';
  db.query(sql, [type, make, model, year], (err, result) => {
    if (err) {
      console.error('Error inserting vehicle:', err);
      res.status(500).send('Error inserting vehicle');
    } else {
      res.send('Vehicle added successfully');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
