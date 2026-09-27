const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'nodeapp',
  port: 5432,
});

app.get('/', async (req, res) => {
  let databaseStatus = 'Unavailable';

  try {
    await pool.query('SELECT 1');
    databaseStatus = 'Connected';
  } catch (error) {
    databaseStatus = 'Unavailable';
  }

  const uptime = Math.floor(process.uptime() / 60);

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Node.js CI/CD Platform</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f4f7fb;
      color: #1f2937;
      min-height: 100vh;
    }

    .header {
      background: #111827;
      color: white;
      padding: 35px 8%;
    }

    .header h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .header p {
      color: #cbd5e1;
    }

    .container {
      width: 84%;
      max-width: 1100px;
      margin: 35px auto;
    }

    .card {
      background: white;
      border-radius: 14px;
      padding: 25px;
      margin-bottom: 25px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
    }

    .status {
      display: inline-block;
      margin-top: 10px;
      padding: 8px 15px;
      border-radius: 20px;
      background: #dcfce7;
      color: #166534;
      font-weight: bold;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 18px;
      margin-top: 20px;
    }

    .stat {
      background: #f8fafc;
      padding: 20px;
      border-radius: 10px;
    }

    .stat h3 {
      font-size: 14px;
      color: #64748b;
      margin-bottom: 8px;
    }

    .stat p {
      font-size: 21px;
      font-weight: bold;
    }

    .connected {
      color: #16a34a;
    }

    .endpoint {
      background: #111827;
      color: #e5e7eb;
      padding: 15px;
      border-radius: 8px;
      margin-top: 10px;
      font-family: monospace;
    }

    .method {
      color: #60a5fa;
      font-weight: bold;
      margin-right: 10px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 15px;
    }

    .tag {
      background: #e0e7ff;
      color: #3730a3;
      padding: 8px 13px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: bold;
    }

    .footer {
      text-align: center;
      color: #64748b;
      padding: 25px;
    }
  </style>
</head>

<body>

  <div class="header">
    <h1>Node.js CI/CD Platform</h1>
    <p>Containerized Backend Application with Automated CI/CD</p>
    <div class="status">● Application Operational</div>
  </div>

  <div class="container">

    <div class="card">
      <h2>System Status</h2>

      <div class="grid">

        <div class="stat">
          <h3>Application</h3>
          <p class="connected">Running</p>
        </div>

        <div class="stat">
          <h3>PostgreSQL</h3>
          <p class="connected">${databaseStatus}</p>
        </div>

        <div class="stat">
          <h3>Uptime</h3>
          <p>${uptime} min</p>
        </div>

        <div class="stat">
          <h3>Environment</h3>
          <p>Docker</p>
        </div>

      </div>
    </div>

    <div class="card">
      <h2>API Endpoints</h2>

      <div class="endpoint">
        <span class="method">GET</span> /
      </div>

      <div class="endpoint">
        <span class="method">GET</span> /health
      </div>

      <div class="endpoint">
        <span class="method">GET</span> /db
      </div>
    </div>

    <div class="card">
      <h2>Technology Stack</h2>

      <div class="tags">
        <span class="tag">Node.js</span>
        <span class="tag">Express</span>
        <span class="tag">PostgreSQL</span>
        <span class="tag">Docker</span>
        <span class="tag">Docker Compose</span>
        <span class="tag">GitHub Actions</span>
        <span class="tag">Jest</span>
        <span class="tag">CI/CD</span>
      </div>
    </div>

  </div>

  <div class="footer">
    Node.js CI/CD Pipeline • Docker • PostgreSQL
  </div>

</body>
</html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS time');

    res.json({
      status: 'connected',
      database: process.env.DB_NAME || 'nodeapp',
      time: result.rows[0].time
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
