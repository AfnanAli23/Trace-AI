import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const register = useAuthStore((state) => state.register);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await register({ name, email, password });
		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				label="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
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
			<Button type="submit">Register</Button>
		</form>
	);
};

export default Register;
