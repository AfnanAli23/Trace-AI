import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const login = useAuthStore((state) => state.login);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login({ email, password });
		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				label="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				label="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button type="submit">Login</Button>
		</form>
	);
};

export default Login;
