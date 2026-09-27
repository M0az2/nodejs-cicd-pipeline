# 🚀 Node.js CI/CD Pipeline

![CI/CD Pipeline](https://github.com/M0az2/nodejs-cicd-pipeline/actions/workflows/ci.yml/badge.svg)

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Framework-000000?logo=express\&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?logo=postgresql\&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker\&logoColor=white)](https://www.docker.com/)
[![Docker%20Compose](https://img.shields.io/badge/Docker%20Compose-Multi--Container-2496ED?logo=docker\&logoColor=white)](https://docs.docker.com/compose/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=githubactions\&logoColor=white)](https://github.com/features/actions)
[![Jest](https://img.shields.io/badge/Jest-Testing-C21325?logo=jest\&logoColor=white)](https://jestjs.io/)
[![Docker Hub](https://img.shields.io/badge/Docker_Hub-Image_Registry-2496ED?logo=docker\&logoColor=white)](https://hub.docker.com/)

> A containerized Node.js backend application with PostgreSQL, automated testing, Docker image delivery, and a GitHub Actions CI/CD pipeline.

---

## 📌 Project Overview

This project demonstrates a complete **CI/CD workflow for a Node.js backend application**.

The application is built with **Node.js and Express.js**, connected to **PostgreSQL**, and containerized using **Docker and Docker Compose**.

The project includes automated testing with **Jest** and a **GitHub Actions CI/CD pipeline** that automates testing, Docker image building, and image delivery.

It also provides a lightweight web-based monitoring interface with dedicated dashboards for:

* 🏠 System Overview
* ❤️ Application Health
* 🗄️ Database Dashboard

The project focuses on practical **Backend Development, Containerization, Automated Testing, and DevOps CI/CD practices**.

---

## ✨ Features

| Feature                  | Description                                    |
| ------------------------ | ---------------------------------------------- |
| 🏠 System Overview       | High-level application and system status       |
| ❤️ Application Health    | Application health and runtime information     |
| 🗄️ Database Dashboard   | PostgreSQL connection and database information |
| 🟢 Health Check          | Application health monitoring endpoint         |
| 🐘 PostgreSQL            | Relational database integration                |
| 🐳 Docker                | Containerized application environment          |
| 🔗 Docker Compose        | Multi-container application environment        |
| 🧪 Jest                  | Automated application testing                  |
| ⚙️ GitHub Actions        | CI/CD automation                               |
| 📦 Docker Build          | Automated Docker image creation                |
| 🚀 Docker Hub            | Container image delivery                       |
| 🔐 Environment Variables | Externalized application configuration         |
| 📊 Web Dashboard         | Visual application monitoring interface        |

---

# 🏗️ Architecture

```text
                         👨‍💻 Developer
                              │
                              │ Git Push
                              ▼
                     ┌──────────────────┐
                     │   GitHub Repo    │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │ GitHub Actions   │
                     │      CI/CD       │
                     └────────┬─────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
                    ▼                   ▼
              🧪 Run Tests        🐳 Docker Build
                    │                   │
                    └─────────┬─────────┘
                              │
                              ▼
                     📦 Docker Hub
                              │
                              ▼
                 ┌─────────────────────────┐
                 │     Docker Compose      │
                 │                         │
                 │  ┌───────────────────┐  │
                 │  │   Node.js App     │  │
                 │  │     Express       │  │
                 │  │     Port 3000     │  │
                 │  └─────────┬─────────┘  │
                 │            │            │
                 │            ▼            │
                 │  ┌───────────────────┐  │
                 │  │    PostgreSQL     │  │
                 │  │     Port 5432     │  │
                 │  └───────────────────┘  │
                 │                         │
                 └─────────────────────────┘
```

---

# 🖥️ Application Dashboards

The project provides a web-based interface for monitoring and inspecting the running application.

The dashboard is divided into three main views:

* 🏠 System Overview
* ❤️ Application Health
* 🗄️ Database Dashboard

---

## 🏠 System Overview

The System Overview dashboard provides a high-level view of the application's current state.

It displays:

* 🟢 Application status
* 🐘 PostgreSQL connection status
* ⏱️ Application uptime
* 🐳 Docker environment
* 🔌 Available API endpoints
* 🧰 Technology stack

### 📸 Dashboard Preview

![System Overview](screenshots/System%20Overview.png)

---

## ❤️ Application Health

The Application Health dashboard provides detailed information about the application's runtime and health status.

It includes:

* 🟢 Application status
* ⚙️ Service status
* ⏱️ Application uptime
* 🟢 Health check result
* 🟢 Runtime information
* 🟢 Node.js version
* 🐳 Execution environment
* 🕐 Health check timestamp

### 📸 Dashboard Preview

![Application Health](screenshots/Application%20Health.png)

---

## 🗄️ Database Dashboard

The Database Dashboard provides detailed information about the PostgreSQL database connection.

It includes:

* 🟢 Connection status
* 🐘 Database engine
* 🗄️ Database name
* 🌐 Database host
* 🕐 PostgreSQL server time
* 🔌 Connection test result
* ⚠️ Error information when the database is unavailable

### 📸 Dashboard Preview

![Database Dashboard](screenshots/Database%20Dashboard.png)

---

# 🔌 API Endpoints

The application exposes REST API endpoints that can be used by monitoring tools, scripts, or other services.

| Method | Endpoint  | Description                       |
| :----: | --------- | --------------------------------- |
|  `GET` | `/`       | 🏠 Main application dashboard     |
|  `GET` | `/health` | ❤️ Application health check       |
|  `GET` | `/db`     | 🗄️ PostgreSQL connectivity check |

---

## ❤️ Health Check API

The `/health` endpoint returns the current application health information.

Example response:

```json
{
  "status": "healthy",
  "uptime": 125.42,
  "timestamp": "2026-09-27T12:00:00.000Z"
}
```

This endpoint can be integrated with:

* 🐳 Docker health checks
* ⚙️ CI/CD systems
* 📊 Monitoring systems
* 🔄 Load balancers
* ☸️ Kubernetes probes

---

## 🗄️ Database Check API

The `/db` endpoint verifies the PostgreSQL connection.

Example response:

```json
{
  "status": "connected",
  "database": "nodeapp",
  "time": "2026-09-27T12:00:00.000Z"
}
```

If the database connection fails, the API returns an error response describing the failure.

---

# 🧰 Technology Stack

| Technology            | Purpose                      |
| --------------------- | ---------------------------- |
| 🟢 **Node.js**        | Backend runtime              |
| ⚡ **Express.js**      | Web framework                |
| 🐘 **PostgreSQL**     | Relational database          |
| 🐳 **Docker**         | Application containerization |
| 🔗 **Docker Compose** | Multi-container environment  |
| ⚙️ **GitHub Actions** | CI/CD automation             |
| 🧪 **Jest**           | Automated testing            |
| 📦 **Docker Hub**     | Container image registry     |
| 🔧 **Git**            | Version control              |

---

# 🔄 CI/CD Workflow

Every push to the `main` branch triggers the automated GitHub Actions workflow.

```text
                👨‍💻 Developer
                     │
                     ▼
                📤 Git Push
                     │
                     ▼
             ⚙️ GitHub Actions
                     │
             ┌───────┴────────┐
             │                │
             ▼                ▼
        🧪 Run Tests      🐳 Build Image
             │                │
             └───────┬────────┘
                     │
                     ▼
             📦 Docker Hub
                     │
                     ▼
               🚀 Image Ready
```

### Pipeline Steps

1. 📥 Checkout the repository
2. 🟢 Install Node.js dependencies
3. 🧪 Run automated Jest tests
4. 🐳 Build the Docker image
5. 🔐 Authenticate with Docker Hub
6. 📦 Push the Docker image
7. ✅ Report the workflow status

This automation reduces manual deployment steps and provides an automated validation process for application changes.

---

# 🐳 Docker Compose

The application uses Docker Compose to run the Node.js application and PostgreSQL database together.

```text
┌──────────────────────────────────────────┐
│             🐳 Docker Compose             │
│                                          │
│   ┌────────────────┐  ┌───────────────┐  │
│   │   Node.js App  │  │  PostgreSQL   │  │
│   │                │  │               │  │
│   │  Express.js    │──│   Database    │  │
│   │   Port 3000    │  │   Port 5432   │  │
│   └────────────────┘  └───────────────┘  │
│                                          │
└──────────────────────────────────────────┘
```

The application communicates with PostgreSQL through the Docker Compose network.

The database host is configured using:

```env
DB_HOST=db
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/M0az2/nodejs-cicd-pipeline.git
cd nodejs-cicd-pipeline
```

---

## 2️⃣ Configure Environment Variables

Create a `.env` file:

```env
PORT=3000
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=nodeapp
```

> ⚠️ The `.env` file is excluded from Git using `.gitignore`.

A safe configuration template is available in:

```text
.env.example
```

---

## 3️⃣ Start the Application

Build and start the containers:

```bash
docker compose up -d --build
```

---

## 4️⃣ Check Running Containers

```bash
docker compose ps
```

Expected services:

```text
app
db
```

---

## 5️⃣ Open the Application

Open:

```text
http://localhost:3000
```

---

## 6️⃣ Access the Dashboards

### 🏠 System Overview

```text
http://localhost:3000
```

### ❤️ Application Health

```text
http://localhost:3000/health-dashboard
```

### 🗄️ Database Dashboard

```text
http://localhost:3000/database-dashboard
```

### 🔌 Health API

```text
http://localhost:3000/health
```

### 🗄️ Database API

```text
http://localhost:3000/db
```

---

## 7️⃣ View Application Logs

```bash
docker compose logs app
```

Follow logs in real time:

```bash
docker compose logs -f app
```

---

## 8️⃣ Stop the Application

```bash
docker compose down
```

---

# 🧪 Running Tests

Install dependencies:

```bash
npm install
```

Run the automated test suite:

```bash
npm test
```

The project uses **Jest** and **Supertest** for automated API testing.

Example:

```text
PASS  ./test.js

✓ should return application dashboard
✓ should return healthy status

Test Suites: 1 passed
Tests:       2 passed
```

Tests are also executed automatically through GitHub Actions.

---

# 📁 Project Structure

```text
nodejs-cicd-pipeline/
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── ⚙️ ci.yml
│
├── 📁 screenshots/
│   ├── 🖼️ System Overview.png
│   ├── 🖼️ Application Health.png
│   └── 🖼️ Database Dashboard.png
│
├── 📄 .env.example
├── 📄 .gitignore
├── 🐳 Dockerfile
├── 🐳 docker-compose.yml
├── 🟢 index.js
├── 📦 package.json
├── 📦 package-lock.json
├── 🧪 test.js
├── 🔧 Makefile
└── 📖 README.md
```

---

# 🔐 Environment & Security

The application uses environment variables for database configuration.

Sensitive configuration is stored locally in `.env` and excluded from version control.

```text
.env
   ↓
Local configuration / secrets

.env.example
   ↓
Safe configuration template
```

The repository does **not** contain the local `.env` file.

---

# 📊 Project Goals

This project focuses on practical **Backend and DevOps engineering concepts**:

* 🔄 CI/CD automation
* 🐳 Containerization
* 🧪 Automated testing
* 🗄️ Database integration
* ⚙️ Environment-based configuration
* 📦 Container image management
* ❤️ Application health monitoring
* 📊 Application dashboards
* 🔧 Reproducible development environments
* 🚀 Automated application delivery

---

# 🎯 DevOps Concepts Demonstrated

The project demonstrates a practical workflow from development to container delivery:

```text
        👨‍💻 Development
              │
              ▼
          📝 Git Commit
              │
              ▼
         📤 Git Push
              │
              ▼
       ⚙️ CI/CD Pipeline
              │
       ┌──────┴──────┐
       ▼             ▼
    🧪 Tests     🐳 Build
       │             │
       └──────┬──────┘
              ▼
        📦 Docker Hub
              │
              ▼
        🚀 Deployable
          Container
```

---

# 📸 Screenshots

The repository contains screenshots demonstrating the running application:

| Screenshot                   | Description                              |
| ---------------------------- | ---------------------------------------- |
| 🏠 `System Overview.png`     | Main application overview dashboard      |
| ❤️ `Application Health.png`  | Application health and runtime dashboard |
| 🗄️ `Database Dashboard.png` | PostgreSQL database dashboard            |

---

# 👨‍💻 Author

**Moaz Nasr**

Cloud & DevOps Engineer

---

<div align="center">

### 🚀 Build → Test → Containerize → Deliver

</div>
