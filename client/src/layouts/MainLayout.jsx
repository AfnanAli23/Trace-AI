import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-blue-600 text-white p-4">TraceAI</header>
			<main className="flex-1 p-4">
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
