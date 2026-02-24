const Modal = ({ show, onClose, children, title }) => {
	if (!show) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded w-96 relative">
				{title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
				{children}
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
					×
				</button>
			</div>
		</div>
	);
};

export default Modal;
