export function Hotbar() {
	const [arg, setArg] = useState(null); // State to store the argument

	const handleFirstButtonClick = () => {
		setArg("1");
		console.log("First button clicked:", arg);
		console.log("name of object is", ChairDetails[0].name);
	};
	const handleSecondButtonClick = () => {
		setArg("2");
		console.log("Second button clicked:", arg);
	};
	const handleThirdButtonClick = () => {
		setArg("3");
		console.log("Third button clicked:", arg);
	};
	const handleToggleClick = () => {
		setIsClosed(!isClosed);
	};

	return (
		<>
			<Button
				size="lg"
				variant="filled"
				className="text-blue-600 hover:text-red-600"
				onClick={handleFirstButtonClick}
			>
				First Button
			</Button>
			<Button
				size="sm"
				color="#fff"
				variant="filled"
				className="text-blue-600 hover:text-red-600"
				onClick={handleSecondButtonClick}
			>
				Second Button
			</Button>
			<Button
				size="lg"
				variant="filled"
				className="text-blue-600 hover:text-red-600"
				onClick={handleThirdButtonClick}
			>
				Third Button
			</Button>
		</>
	);
}
