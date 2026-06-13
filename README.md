# Node.js CI/CD Pipeline 

![CI/CD Pipeline](https://github.com/M0az2/nodejs-cicd-pipeline/actions/workflows/ci.yml/badge.svg)

A production-ready Node.js application with a full CI/CD pipeline using GitHub Actions and Docker.

## Live Pipeline
🔗 [GitHub Actions](https://github.com/M0az2/nodejs-cicd-pipeline/actions)
🐳 [Docker Hub](https://hub.docker.com/r/moaznasr/nodejs-cicd-pipeline)

## Tech Stack
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **PostgreSQL** - Database
- **GitHub Actions** - CI/CD Pipeline
- **Jest** - Testing framework

## Features
- ✅ Automated testing on every push
- ✅ Docker image build and push to Docker Hub
- ✅ PostgreSQL database with Docker Compose
- ✅ Health check endpoint
- ✅ Environment variables with `.env`
- ✅ Makefile for easy commands

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Returns status ok |
| GET | /health | Returns server health status |
| GET | /db | Returns database connection status |

## Getting Started

### Run locally
```bash
npm install
npm start
```

### Run with Docker Compose
```bash
make up
```

### Run tests
```bash
npm test
```

## CI/CD Pipeline
On every push to main:
1. Run automated tests
2. Build Docker image
3. Push to Docker Hub automatically
