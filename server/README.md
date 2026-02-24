# 🚀 TraceAI Server (Backend) — Intelligent Bug Tracking & Root Cause Analyzer

TraceAI is an AI-powered bug tracking platform designed to accelerate debugging workflows by automatically analyzing errors, predicting root causes, detecting duplicate bugs, and suggesting fixes using large language models and semantic embeddings.

This repository contains the **backend API** built with Node.js, Express, MongoDB, and OpenAI.

---

# 🧠 Key Features

## ✅ Smart Bug Submission

- Upload logs, stack traces, screenshots
- AI generates:
  - Bug summary
  - Root cause analysis
  - Suggested fixes
  - Severity prediction

## ✅ Duplicate Bug Detection (Semantic AI)

- Embeddings generated for each bug
- Cosine similarity comparison
- Suggest similar bugs before submission

## ✅ Priority Prediction Engine

AI automatically classifies severity:

- Critical
- High
- Medium
- Low

## ✅ Developer Dashboard Analytics

- Bugs by status
- Priority distribution
- Module heatmap
- Resolution metrics

## ✅ AI Debug Assistant (Chat)

Ask questions like:

> Why is this null pointer happening?
> Which module is risky?
> How do I fix this stack trace?

AI responds using:

- Bug context
- Logs
- Stack trace
- Historical data

## ✅ Real-Time Updates (WebSockets)

- Bug status changes
- Notifications
- Live collaboration ready

---

# 🏗️ Architecture Overview

The backend follows a **modular domain-driven architecture**:

```
src/
│
├── config/        → Database & external services
├── modules/       → Feature-based modules
│   ├── auth/
│   ├── bug/
│   ├── dashboard/
│   ├── chat/
│   └── user/
│
├── services/      → Business logic & AI layer
├── middleware/    → Express middlewares
├── utils/         → Helpers & constants
├── sockets/       → Real-time communication
│
├── app.js
└── server.js
```

This structure enables:

- Scalability
- Maintainability
- Clean separation of concerns

---

# ⚙️ Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (file uploads)
- Socket.IO (real-time)

## AI Layer

- OpenAI API
- Embeddings (semantic similarity)
- Prompt engineering
- AI classification

---

# 🔥 AI Capabilities

TraceAI integrates multiple AI workflows:

### 1️⃣ Bug Analysis

LLM analyzes logs and stack traces to generate debugging insights.

### 2️⃣ Embedding Generation

Each bug converted into vector representation for semantic comparison.

### 3️⃣ Duplicate Detection

Cosine similarity identifies related bugs.

### 4️⃣ Priority Prediction

AI classifies severity based on impact context.

### 5️⃣ Conversational Debugging

Chat interface powered by contextual reasoning.

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```
git clone ...
cd
```

## 2️⃣ Install Dependencies

```
npm install
```

## 3️⃣ Environment Variables

Create `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017
JWT_SECRET=your_secret
OPENAI_API_KEY=your_openai_key
```

## 4️⃣ Run Server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Auth

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

## Bugs

```
POST   /api/bugs
GET    /api/bugs
GET    /api/bugs/:id
PUT    /api/bugs/:id
DELETE /api/bugs/:id
```

## Dashboard

```
GET /api/dashboard
```

## Chat

```
POST /api/chat/ask
GET  /api/chat/history/:bugId
```

---

# 📊 Example Flow

Bug Submission Flow:

```
User submits bug
        ↓
AI analyzes logs
        ↓
Bug saved to DB
        ↓
Embedding generated
        ↓
Duplicate detection
        ↓
Response returned
```

---

# 🧪 Example API Response

```
{
  "bug": {...},
  "duplicates": [
    {
      "bug": {...},
      "similarity": 0.91
    }
  ]
}
```

---

# 🔐 Authentication

Uses JWT tokens via:

- Cookies OR
- Authorization header

```
Authorization: Bearer <token>
```

---

# ⚡ Real-Time Events

Socket.IO Events:

```
joinBugRoom
bugUpdated
```

---

# 🧩 Design Decisions

Key engineering decisions:

- Modular architecture for scalability
- Service layer abstraction for AI logic
- Embedding-based similarity instead of keyword search
- Async error handling middleware
- Centralized response utilities
- WebSocket layer decoupled from business logic

---

# 📈 Scalability Considerations

Future improvements:

- Vector database (Pinecone / Weaviate)
- Microservices architecture
- Message queues (Kafka / RabbitMQ)
- Kubernetes deployment
- AI caching layer

---

# ⭐ Highlights

This project demonstrates:

- ✅ Real-world engineering workflow understanding
- ✅ AI integration in production systems
- ✅ Backend architecture design skills
- ✅ Data modeling with MongoDB
- ✅ Semantic search using embeddings
- ✅ Prompt engineering knowledge
- ✅ WebSockets implementation
- ✅ SaaS-style analytics

---

# 🧠 What Makes This Project Unique

Most bug trackers only store issues.

TraceAI:

- Understands bugs
- Predicts problems
- Suggests solutions
- Learns patterns

This moves from **CRUD application → Intelligent System**.

---

> # 👨‍💻 Author: Afnan Ali
