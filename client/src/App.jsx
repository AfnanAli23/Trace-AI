import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bugs from "./pages/Bugs";
import BugDetails from "./pages/BugDetails";
import AIChat from "./pages/AIChat";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>

				<Route element={<MainLayout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/bugs" element={<Bugs />} />
					<Route path="/bugs/:id" element={<BugDetails />} />
					<Route path="/chat/:bugId" element={<AIChat />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
