# Node.js CI/CD Pipeline

![CI/CD Pipeline](https://github.com/M0az2/nodejs-cicd-pipeline/actions/workflows/ci.yml/badge.svg)

A production-ready Node.js application with full CI/CD pipeline using GitHub Actions and Docker.

## Tech Stack
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Docker** - Containerization
- **GitHub Actions** - CI/CD Pipeline
- **Jest** - Testing framework

## Features
- Automated testing on every push
- Docker image build on every push
- RESTful API endpoint

## Getting Started

### Run locally
```bash
npm install
npm start
```

### Run with Docker
```bash
docker build -t nodejs-cicd-pipeline .
docker run -p 3000:3000 nodejs-cicd-pipeline
```

### Run tests
```bash
npm test
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Returns status ok |

## CI/CD Pipeline
On every push to main:
1. Run automated tests
2. Build Docker image
