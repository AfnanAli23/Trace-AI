const Input = ({ label, type = "text", value, onChange, placeholder }) => {
	return (
		<div className="flex flex-col mb-4">
			{label && <label className="mb-1 font-medium">{label}</label>}
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
	);
};

export default Input;
