# 🚀 Node.js CI/CD Pipeline

![CI/CD Pipeline](https://github.com/M0az2/nodejs-cicd-pipeline/actions/workflows/ci.yml/badge.svg)

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Framework-000000?logo=express\&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?logo=postgresql\&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker\&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?logo=githubactions\&logoColor=white)](https://github.com/features/actions)
[![Jest](https://img.shields.io/badge/Jest-Testing-C21325?logo=jest\&logoColor=white)](https://jestjs.io/)

> A containerized Node.js backend with PostgreSQL, automated testing, Docker image delivery, and a GitHub Actions CI/CD pipeline.

---

## 📌 Project Overview

This project demonstrates a complete **CI/CD workflow for a Node.js backend application**.

The application is containerized using Docker and connected to PostgreSQL through Docker Compose. GitHub Actions automates the testing and Docker image delivery process whenever changes are pushed to the `main` branch.

The project also includes a lightweight **application dashboard** that displays the current application status, database connectivity, uptime, API endpoints, and technology stack.

---

## ✨ Features

| Feature                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| 🟢 Application Dashboard | Displays application and system status      |
| 🗄️ PostgreSQL           | Database integration using PostgreSQL       |
| 🐳 Docker                | Containerized application environment       |
| 🔗 Docker Compose        | Runs application and database together      |
| 🧪 Automated Testing     | Jest tests executed through CI              |
| ⚙️ CI/CD                 | Automated workflow using GitHub Actions     |
| 📦 Docker Build          | Automatically builds the application image  |
| 🚀 Image Delivery        | Publishes Docker images to Docker Hub       |
| ❤️ Health Check          | Application health monitoring endpoint      |
| 🔐 Environment Config    | Configuration through environment variables |

---

## 🏗️ Architecture

```text
                         GitHub Repository
                                │
                                │ Push
                                ▼
                       ┌─────────────────┐
                       │ GitHub Actions  │
                       └────────┬────────┘
                                │
                         ┌──────┴──────┐
                         │             │
                       Tests       Docker Build
                         │             │
                         └──────┬──────┘
                                │
                                ▼
                         Docker Registry
                                │
                                │
                    ┌───────────▼───────────┐
                    │    Docker Compose     │
                    │                       │
                    │  ┌─────────────────┐  │
                    │  │   Node.js App   │  │
                    │  │    Express.js   │  │
                    │  └────────┬────────┘  │
                    │           │           │
                    │           ▼           │
                    │  ┌─────────────────┐  │
                    │  │   PostgreSQL    │  │
                    │  └─────────────────┘  │
                    └───────────────────────┘
```

---

## 🖥️ Application Dashboard

The root endpoint provides a simple web dashboard for viewing the current application state.

It displays:

* 🟢 Application status
* 🗄️ PostgreSQL connectivity
* ⏱️ Application uptime
* 🐳 Docker environment
* 🔌 Available API endpoints
* 🧰 Technology stack

Run the application and open:

```text
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint  | Description                       |
| :----: | --------- | --------------------------------- |
|  `GET` | `/`       | 🖥️ Application dashboard         |
|  `GET` | `/health` | ❤️ Application health check       |
|  `GET` | `/db`     | 🗄️ PostgreSQL connectivity check |

### ❤️ Health Check

```json
{
  "status": "healthy",
  "uptime": 125.42,
  "timestamp": "2026-09-27T12:00:00.000Z"
}
```

### 🗄️ Database Check

```json
{
  "status": "connected",
  "database": "nodeapp",
  "time": "2026-09-27T12:00:00.000Z"
}
```

---

## 🧰 Technology Stack

<div align="center">

| Technology        | Purpose                     |
| ----------------- | --------------------------- |
| 🟢 Node.js        | Backend runtime             |
| ⚡ Express.js      | Web framework               |
| 🐘 PostgreSQL     | Relational database         |
| 🐳 Docker         | Containerization            |
| 🔗 Docker Compose | Multi-container environment |
| ⚙️ GitHub Actions | CI/CD automation            |
| 🧪 Jest           | Automated testing           |
| 📦 Docker Hub     | Container image registry    |

</div>

---

## 🔄 CI/CD Workflow

Every push to the `main` branch triggers the automated pipeline.

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
        ▼                ▼
    🧪 Run Tests     🐳 Build Image
        │                │
        └───────┬────────┘
                ▼
        📦 Push to Docker Hub
```

### Pipeline Steps

1. 🧪 Install dependencies and run tests
2. 🐳 Build Docker image
3. 📦 Push image to Docker Hub
4. ✅ Report pipeline status

---

## 🐳 Docker Compose

The application runs as a multi-container environment:

```text
┌───────────────────────────────────────┐
│           Docker Compose              │
│                                       │
│   ┌──────────────┐  ┌──────────────┐ │
│   │   Node.js    │  │  PostgreSQL  │ │
│   │     App      │──│   Database   │ │
│   │   Port 3000  │  │   Port 5432  │ │
│   └──────────────┘  └──────────────┘ │
│                                       │
└───────────────────────────────────────┘
```

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/M0az2/nodejs-cicd-pipeline.git
cd nodejs-cicd-pipeline
```

### 2. Configure environment variables

Create a `.env` file:

```env
PORT=3000
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=nodeapp
```

> ⚠️ The `.env` file is excluded from Git using `.gitignore`.

A template is available in:

```text
.env.example
```

### 3. Start the application

```bash
docker compose up -d --build
```

### 4. Check containers

```bash
docker compose ps
```

### 5. Open the dashboard

```text
http://localhost:3000
```

### 6. View logs

```bash
docker compose logs app
```

### 7. Stop the application

```bash
docker compose down
```

---

## 🧪 Running Tests

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Tests can also be executed automatically through GitHub Actions.

---

## 📁 Project Structure

```text
nodejs-cicd-pipeline/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── index.js
├── package.json
├── package-lock.json
├── test.js
├── Makefile
└── README.md
```

---

## 🔐 Environment & Security

The application uses environment variables for database configuration.

Sensitive configuration is stored locally in `.env` and excluded from version control.

```text
.env          → Local secrets/configuration
.env.example  → Safe configuration template
```

---

## 📊 Project Goals

This project focuses on practical DevOps and backend concepts:

* 🔄 CI/CD automation
* 🐳 Containerization
* 🧪 Automated testing
* 🗄️ Database integration
* ⚙️ Infrastructure-independent application configuration
* 📦 Container image management
* ❤️ Application health monitoring
* 🔧 Reproducible development environments

---

## 👨‍💻 Author

**Moaz Nasr**

Cloud & DevOps Engineer

---

<div align="center">

### 🚀 Build → Test → Containerize → Deliver

</div>
