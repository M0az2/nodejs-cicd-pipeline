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

function pageLayout(title, content, activePage = 'overview') {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${title}</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #f8fafc;
      color: #0f172a;
      min-height: 100vh;
    }

    .navbar {
      background: #0f172a;
      color: white;
      padding: 18px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
      flex-wrap: wrap;
    }

    .brand {
      font-size: 20px;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .nav-links a {
      color: #cbd5e1;
      text-decoration: none;
      padding: 9px 14px;
      border-radius: 7px;
      font-size: 14px;
    }

    .nav-links a:hover,
    .nav-links a.active {
      background: #1e293b;
      color: white;
    }

    .container {
      width: 88%;
      max-width: 1200px;
      margin: 35px auto 50px;
    }

    .hero {
      background: #111827;
      color: white;
      border-radius: 16px;
      padding: 35px;
      margin-bottom: 28px;
    }

    .hero h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .hero p {
      color: #cbd5e1;
      line-height: 1.6;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 18px;
      padding: 9px 15px;
      border-radius: 20px;
      background: #dcfce7;
      color: #166534;
      font-weight: bold;
      font-size: 14px;
    }

    .section {
      margin-bottom: 30px;
    }

    .section-title {
      font-size: 21px;
      margin-bottom: 16px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
    }

    .card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 23px;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
    }

    .card h2 {
      font-size: 19px;
      margin-bottom: 16px;
    }

    .stat-label {
      color: #64748b;
      font-size: 13px;
      margin-bottom: 9px;
    }

    .stat-value {
      font-size: 22px;
      font-weight: bold;
    }

    .success {
      color: #16a34a;
    }

    .danger {
      color: #dc2626;
    }

    .info {
      color: #2563eb;
    }

    .muted {
      color: #64748b;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 14px 0;
      border-bottom: 1px solid #e2e8f0;
    }

    .detail-row:last-child {
      border-bottom: none;
    }

    .detail-label {
      color: #64748b;
    }

    .detail-value {
      font-weight: bold;
      text-align: right;
      word-break: break-word;
    }

    .endpoint {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      padding: 14px 0;
      border-bottom: 1px solid #e2e8f0;
    }

    .endpoint:last-child {
      border-bottom: none;
    }

    .endpoint-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .method {
      background: #dbeafe;
      color: #1d4ed8;
      padding: 5px 9px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: bold;
      font-family: monospace;
    }

    .endpoint-name {
      font-family: monospace;
      font-weight: bold;
    }

    .button {
      display: inline-block;
      text-decoration: none;
      border: none;
      background: #2563eb;
      color: white;
      padding: 10px 15px;
      border-radius: 7px;
      font-weight: bold;
      font-size: 13px;
      cursor: pointer;
    }

    .button:hover {
      background: #1d4ed8;
    }

    .button.secondary {
      background: #e2e8f0;
      color: #0f172a;
    }

    .button.secondary:hover {
      background: #cbd5e1;
    }

    .service-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
    }

    .service-name {
      font-weight: bold;
      margin-bottom: 6px;
    }

    .service-description {
      color: #64748b;
      font-size: 13px;
    }

    .status-dot {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-size: 13px;
      font-weight: bold;
    }

    .dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #22c55e;
    }

    .technology-list {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
    }

    .tag {
      background: #eef2ff;
      color: #3730a3;
      padding: 8px 12px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: bold;
    }

    .footer {
      text-align: center;
      color: #64748b;
      padding: 25px;
      font-size: 13px;
    }

    @media (max-width: 900px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .grid-2 {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 600px) {
      .container {
        width: 92%;
        margin-top: 22px;
      }

      .hero {
        padding: 25px;
      }

      .hero h1 {
        font-size: 26px;
      }

      .grid {
        grid-template-columns: 1fr;
      }

      .navbar {
        padding: 16px 4%;
      }

      .endpoint {
        align-items: flex-start;
        flex-direction: column;
      }
    }
  </style>
</head>

<body>

  <nav class="navbar">

    <div class="brand">
      Node.js CI/CD Platform
    </div>

    <div class="nav-links">

      <a href="/" class="${activePage === 'overview' ? 'active' : ''}">
        Overview
      </a>

      <a href="/health-dashboard" class="${activePage === 'health' ? 'active' : ''}">
        Application Health
      </a>

      <a href="/database-dashboard" class="${activePage === 'database' ? 'active' : ''}">
        Database
      </a>

    </div>

  </nav>

  <main class="container">
    ${content}
  </main>

  <footer class="footer">
    Node.js CI/CD Pipeline • Docker • PostgreSQL • GitHub Actions
  </footer>

</body>
</html>
`;
}

app.get('/', async (req, res) => {

  let databaseStatus = 'Unavailable';

  try {
    await pool.query('SELECT 1');
    databaseStatus = 'Connected';
  } catch (error) {
    databaseStatus = 'Unavailable';
  }

  const uptimeSeconds = Math.floor(process.uptime());
  const uptimeMinutes = Math.floor(uptimeSeconds / 60);
  const uptimeHours = Math.floor(uptimeMinutes / 60);

  const uptime =
    uptimeHours > 0
      ? `${uptimeHours}h ${uptimeMinutes % 60}m`
      : `${uptimeMinutes}m ${uptimeSeconds % 60}s`;

  const content = `

    <section class="hero">

      <h1>System Overview</h1>

      <p>
        Monitor the application, database, APIs and runtime environment
        from one centralized dashboard.
      </p>

      <div class="status-badge">
        ● Application Operational
      </div>

    </section>

    <section class="section">

      <h2 class="section-title">
        System Status
      </h2>

      <div class="grid">

        <div class="card">
          <div class="stat-label">Application</div>
          <div class="stat-value success">
            Running
          </div>
        </div>

        <div class="card">
          <div class="stat-label">PostgreSQL</div>
          <div class="stat-value ${databaseStatus === 'Connected' ? 'success' : 'danger'}">
            ${databaseStatus}
          </div>
        </div>

        <div class="card">
          <div class="stat-label">Environment</div>
          <div class="stat-value info">
            Docker
          </div>
        </div>

        <div class="card">
          <div class="stat-label">Uptime</div>
          <div class="stat-value">
            ${uptime}
          </div>
        </div>

      </div>

    </section>

    <section class="section">

      <div class="grid-2">

        <div class="card">

          <h2>Application</h2>

          <div class="details">

            <div class="detail-row">
              <span class="detail-label">Runtime</span>
              <span class="detail-value">Node.js</span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Framework</span>
              <span class="detail-value">Express.js</span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Port</span>
              <span class="detail-value">${PORT}</span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Environment</span>
              <span class="detail-value">Docker</span>
            </div>

          </div>

          <div style="margin-top: 20px;">
            <a class="button" href="/health-dashboard">
              View Application Health
            </a>
          </div>

        </div>

        <div class="card">

          <h2>Database</h2>

          <div class="details">

            <div class="detail-row">
              <span class="detail-label">Engine</span>
              <span class="detail-value">PostgreSQL</span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Database</span>
              <span class="detail-value">
                ${process.env.DB_NAME || 'nodeapp'}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Host</span>
              <span class="detail-value">
                ${process.env.DB_HOST || 'db'}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Status</span>
              <span class="detail-value success">
                ${databaseStatus}
              </span>
            </div>

          </div>

          <div style="margin-top: 20px;">
            <a class="button" href="/database-dashboard">
              View Database Details
            </a>
          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <h2 class="section-title">
        Services
      </h2>

      <div class="grid-2">

        <div class="card service-card">

          <div>
            <div class="service-name">
              Node.js Application
            </div>

            <div class="service-description">
              Backend API and web dashboard
            </div>
          </div>

          <div class="status-dot">
            <span class="dot"></span>
            UP
          </div>

        </div>

        <div class="card service-card">

          <div>
            <div class="service-name">
              PostgreSQL
            </div>

            <div class="service-description">
              Application database
            </div>
          </div>

          <div class="status-dot">
            <span class="dot"></span>
            ${databaseStatus.toUpperCase()}
          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="grid-2">

        <div class="card">

          <h2>API Endpoints</h2>

          <div class="endpoint">

            <div class="endpoint-info">
              <span class="method">GET</span>
              <span class="endpoint-name">/health</span>
            </div>

            <a class="button secondary" href="/health-dashboard">
              Open
            </a>

          </div>

          <div class="endpoint">

            <div class="endpoint-info">
              <span class="method">GET</span>
              <span class="endpoint-name">/db</span>
            </div>

            <a class="button secondary" href="/database-dashboard">
              Open
            </a>

          </div>

        </div>

        <div class="card">

          <h2>Technology Stack</h2>

          <div class="technology-list">

            <span class="tag">Node.js</span>
            <span class="tag">Express.js</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">Docker</span>
            <span class="tag">Docker Compose</span>
            <span class="tag">GitHub Actions</span>
            <span class="tag">Jest</span>
            <span class="tag">CI/CD</span>

          </div>

        </div>

      </div>

    </section>
  `;

  res.send(pageLayout(
    'Node.js CI/CD Platform',
    content,
    'overview'
  ));
});


app.get('/health-dashboard', async (req, res) => {

  const uptimeSeconds = Math.floor(process.uptime());
  const uptimeMinutes = Math.floor(uptimeSeconds / 60);

  const content = `

    <section class="hero">

      <h1>Application Health</h1>

      <p>
        Detailed runtime and application health information.
      </p>

      <div class="status-badge">
        ● Healthy
      </div>

    </section>

    <section class="section">

      <div class="grid">

        <div class="card">
          <div class="stat-label">Status</div>
          <div class="stat-value success">
            Healthy
          </div>
        </div>

        <div class="card">
          <div class="stat-label">Service</div>
          <div class="stat-value info">
            Node.js API
          </div>
        </div>

        <div class="card">
          <div class="stat-label">Uptime</div>
          <div class="stat-value">
            ${uptimeMinutes} min
          </div>
        </div>

        <div class="card">
          <div class="stat-label">Environment</div>
          <div class="stat-value">
            Docker
          </div>
        </div>

      </div>

    </section>

    <section class="section">

      <div class="grid-2">

        <div class="card">

          <h2>Runtime Information</h2>

          <div class="details">

            <div class="detail-row">
              <span class="detail-label">Node.js Version</span>
              <span class="detail-value">
                ${process.version}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Process ID</span>
              <span class="detail-value">
                ${process.pid}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Port</span>
              <span class="detail-value">
                ${PORT}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Uptime</span>
              <span class="detail-value">
                ${process.uptime().toFixed(2)} seconds
              </span>
            </div>

          </div>

        </div>

        <div class="card">

          <h2>Health Check</h2>

          <div class="details">

            <div class="detail-row">
              <span class="detail-label">API Status</span>
              <span class="detail-value success">
                Operational
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">HTTP Method</span>
              <span class="detail-value">
                GET
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Endpoint</span>
              <span class="detail-value">
                /health
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Response</span>
              <span class="detail-value success">
                HTTP 200
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="card">

        <h2>Health Check Data</h2>

        <div class="details">

          <div class="detail-row">
            <span class="detail-label">Service</span>
            <span class="detail-value">
              nodejs-cicd-platform
            </span>
          </div>

          <div class="detail-row">
            <span class="detail-label">Status</span>
            <span class="detail-value success">
              Healthy
            </span>
          </div>

          <div class="detail-row">
            <span class="detail-label">Runtime</span>
            <span class="detail-value">
              Node.js ${process.version}
            </span>
          </div>

          <div class="detail-row">
            <span class="detail-label">Timestamp</span>
            <span class="detail-value">
              ${new Date().toLocaleString()}
            </span>
          </div>

        </div>

      </div>

    </section>

    <a class="button secondary" href="/">
      ← Back to Overview
    </a>
  `;

  res.send(pageLayout(
    'Application Health',
    content,
    'health'
  ));
});


app.get('/database-dashboard', async (req, res) => {

  let status = 'Connected';
  let serverTime = 'Unavailable';
  let errorMessage = '';

  try {

    const result = await pool.query(
      'SELECT NOW() AS time'
    );

    serverTime = new Date(
      result.rows[0].time
    ).toLocaleString();

  } catch (error) {

    status = 'Unavailable';
    errorMessage = error.message;

  }

  const content = `

    <section class="hero">

      <h1>Database Dashboard</h1>

      <p>
        PostgreSQL connection and database information.
      </p>

      <div class="status-badge">
        ${status === 'Connected'
          ? '● Database Connected'
          : '● Database Unavailable'}
      </div>

    </section>

    <section class="section">

      <div class="grid">

        <div class="card">

          <div class="stat-label">
            Connection Status
          </div>

          <div class="stat-value ${
            status === 'Connected'
              ? 'success'
              : 'danger'
          }">
            ${status}
          </div>

        </div>

        <div class="card">

          <div class="stat-label">
            Database Engine
          </div>

          <div class="stat-value info">
            PostgreSQL
          </div>

        </div>

        <div class="card">

          <div class="stat-label">
            Database
          </div>

          <div class="stat-value">
            ${process.env.DB_NAME || 'nodeapp'}
          </div>

        </div>

        <div class="card">

          <div class="stat-label">
            Host
          </div>

          <div class="stat-value">
            ${process.env.DB_HOST || 'db'}
          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="grid-2">

        <div class="card">

          <h2>Connection Information</h2>

          <div class="details">

            <div class="detail-row">
              <span class="detail-label">Engine</span>
              <span class="detail-value">
                PostgreSQL
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Host</span>
              <span class="detail-value">
                ${process.env.DB_HOST || 'db'}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Port</span>
              <span class="detail-value">
                5432
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Database</span>
              <span class="detail-value">
                ${process.env.DB_NAME || 'nodeapp'}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">User</span>
              <span class="detail-value">
                ${process.env.DB_USER || 'postgres'}
              </span>
            </div>

          </div>

        </div>

        <div class="card">

          <h2>Database Health</h2>

          <div class="details">

            <div class="detail-row">
              <span class="detail-label">Status</span>
              <span class="detail-value ${
                status === 'Connected'
                  ? 'success'
                  : 'danger'
              }">
                ${status}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Server Time</span>
              <span class="detail-value">
                ${serverTime}
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">Connection Test</span>
              <span class="detail-value success">
                SELECT 1
              </span>
            </div>

            <div class="detail-row">
              <span class="detail-label">API Endpoint</span>
              <span class="detail-value">
                /db
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>

    ${
      errorMessage
        ? `
          <section class="section">

            <div class="card">

              <h2>Connection Error</h2>

              <p class="danger">
                ${errorMessage}
              </p>

            </div>

          </section>
        `
        : ''
    }

    <a class="button secondary" href="/">
      ← Back to Overview
    </a>
  `;

  res.send(pageLayout(
    'Database Dashboard',
    content,
    'database'
  ));
});


app.get('/health', (req, res) => {

  res.json({
    status: 'healthy',
    service: 'nodejs-cicd-platform',
    uptime: process.uptime(),
    node_version: process.version,
    environment: 'docker',
    timestamp: new Date().toISOString()
  });

});


app.get('/db', async (req, res) => {

  try {

    const result = await pool.query(
      'SELECT NOW() AS time'
    );

    res.json({
      status: 'connected',
      database: process.env.DB_NAME || 'nodeapp',
      host: process.env.DB_HOST || 'db',
      engine: 'PostgreSQL',
      server_time: result.rows[0].time
    });

  } catch (err) {

    res.status(500).json({
      status: 'error',
      database: process.env.DB_NAME || 'nodeapp',
      message: err.message
    });

  }

});


let server;

if (require.main === module) {

  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

}

module.exports = {
  app,
  server
};
