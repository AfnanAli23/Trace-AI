# 🚀 TraceAI Client (Frontend)

> AI-powered bug tracking and debugging assistant — built with a modern React stack.

> This frontend provides an intuitive developer experience for managing bugs, visualizing analytics, and interacting with an AI assistant to accelerate debugging workflows.

## 📌 Tech Stack

- React (Vite)
- Zustand (State Management)
- Axios (API Communication)
- Socket.io Client (Realtime Updates)
- Tailwind / Custom CSS
- Recharts / Charting Library
- JWT Authentication

---

### 📂 Project Structure

```
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
```

---

_**⚙️ Installation & Setup**_

- 1️⃣ Clone Repository
- 2️⃣ Install Dependencies > npm install
- 3️⃣ Environment Variables

---

> Create .env file in root:

- VITE_API_URL=http://localhost:5000/api
- VITE_SOCKET_URL=http://localhost:5000

---

- 4️⃣ Run Development Server > npm run dev

> App will run on:

> http://localhost:3000

### 🔐 Authentication Flow

- JWT stored in localStorage
- Axios interceptor injects token automatically
- Protected routes handled via auth state

---

# 🧑‍💻 Author

> Afnan Ali | Software Engineer (MERN + AI Systems)
