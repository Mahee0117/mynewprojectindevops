# SkyNode 🌤️

A simple, clean Node.js REST API built with Express.

## Getting Started

### Install dependencies
```bash
npm install
```

### Run in development mode
```bash
npm run dev
```

### Run in production
```bash
npm start
```

The server runs on **http://localhost:3000** by default.

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | App info & status |
| GET | `/health` | Health check |
| GET | `/api/greet/:name` | Greet by name |

## Tech Stack
- **Runtime**: Node.js v22
- **Framework**: Express 4
- **Port**: 3000
