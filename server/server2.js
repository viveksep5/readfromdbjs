// Import the mysql2 package
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a connection to the MariaDB database
const connection = mysql.createConnection({
  host: 'IBM-PF1STNCL',
  user: 'vivekk@localhost',
  password: 'Feb@2024',
  database: 'sse_cs_backup'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB');
});

//app.use(express.static('server/public'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// GET TASKS
app.get('/api/tasks', async (req, res) => {
  const whereClause = req.query.where || '1'; // Default to 1 if no WHERE clause is provided
  const queryString = `SELECT * FROM "fin_entry" WHERE ${whereClause}`;
  try {
    const response = await pool.query(queryString);
    res.send(response.rows);
  } catch (error) {
    console.log(`Query failed: ${error}`);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log(`Server is running on localhost:${3000}`);
});
