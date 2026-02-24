🚀 TraceAI Frontend

AI-powered bug tracking and debugging assistant — built with a modern React stack.

This frontend provides an intuitive developer experience for managing bugs, visualizing analytics, and interacting with an AI assistant to accelerate debugging workflows.

📌 Tech Stack

React (Vite)

Zustand (State Management)

Axios (API Communication)

Socket.io Client (Realtime Updates)

Tailwind / Custom CSS

Recharts / Charting Library

JWT Authentication

📂 Project Structure
src/
│
├── api/                # API layer (Axios services)
├── components/         # Reusable UI + Feature components
├── pages/              # Route pages
├── layouts/            # App layouts
├── hooks/              # Custom hooks
├── store/              # Zustand state stores
├── context/            # Socket context provider
├── utils/              # Helper functions
│
├── App.jsx
├── main.jsx
└── index.css
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone <repo-url>
cd traceai-frontend
2️⃣ Install Dependencies
npm install
3️⃣ Environment Variables

Create .env file in root:

VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
4️⃣ Run Development Server
npm run dev

App will run on:

http://localhost:5173
🔐 Authentication Flow

JWT stored in localStorage

Axios interceptor injects token automatically

Protected routes handled via auth state

🧠 Key Features
✅ Bug Management

Create / Update / Delete Bugs

Priority & Status Tracking

Module-wise classification

📊 Analytics Dashboard

Bug Trends Visualization

Resolution Time Metrics

Module Heatmaps

Performance Insights

🤖 AI Debug Assistant

Chat-based debugging help

Context-aware bug suggestions

Developer productivity boost

⚡ Realtime Updates

Socket.io integration

Live bug updates

Instant notifications

🧩 State Management (Zustand)

Stores:

authStore.js   → authentication state
bugStore.js    → bug data state
uiStore.js     → UI state (modals, loaders)

Why Zustand?

Lightweight

Minimal boilerplate

Excellent performance

Industry adoption growing

🔌 API Architecture
api/
│
├── axios.js        → Base Axios instance
├── auth.api.js     → Authentication APIs
├── bug.api.js      → Bug APIs
├── dashboard.api.js→ Dashboard analytics
└── chat.api.js     → AI chat APIs

Separation of concerns improves maintainability and scalability.

📡 Socket Architecture
context/
└── SocketContext.jsx

Custom Hook:

useSocket.js

Provides:

Centralized socket connection

Event listeners

Realtime state sync

🎨 UI Architecture

Reusable UI Components:

components/ui/

Feature Components:

components/bugs/
components/dashboard/
components/chat/

This follows Atomic + Feature-based architecture used in production apps.

🧪 Testing Suggestions (Optional for Recruiters)

Recommended tools:

React Testing Library

Vitest / Jest

Cypress (E2E)

🚀 Performance Optimizations

Lazy loading pages

Memoized components

Optimized state updates

Axios interceptors

Socket event cleanup

📈 Scalability Considerations

This frontend is designed to scale with:

Microservices backend

Multi-tenant architecture

Role-based access

Enterprise dashboards

👨‍💻 Recruiter Notes (Important)

This project demonstrates:

✅ Real-world architecture
✅ API integration skills
✅ State management expertise
✅ Realtime systems knowledge
✅ Data visualization
✅ AI integration capability
✅ Clean component design
✅ Scalable folder structure

Strong indicators of:

Production-ready Full Stack Engineer capability

⭐ What Makes This Project Unique

Most bug trackers are CRUD dashboards.

TraceAI adds:

AI debugging assistant

Developer productivity analytics

Intelligent insights

Realtime collaboration potential

This aligns with future developer tooling trends (2026+).

🔮 Future Improvements

Team collaboration features

GitHub integration

CI/CD failure analysis

AI root-cause prediction

Browser extension

🧑‍💻 Author

Afnan Ali
Software Engineer (MERN + AI Systems)

📜 License