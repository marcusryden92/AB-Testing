import { useState, useEffect } from "react";
function FormA() {
	const [userChoice, setUserChoice] = useState(null);
	const [entryTime, setEntryTime] = useState(null);

	useEffect(() => {
		setEntryTime(new Date());
	}, []);

	function handleChoice(e) {
		setUserChoice(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const submitTime = new Date();

		console.log("payload", {
			entryTime,
			userChoice: userChoice,
			formType: "FormA",
			submitTime,
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Choose your fighter!</h2>
			<div className="flex">
				<div>
					<label htmlFor="radio1">Blazing Baytash</label>
					<input
						type="radio"
						name="radio"
						value={"Blazing Baytash"}
						id="radio1"
						onChange={handleChoice}
					></input>
				</div>
				<div>
					<label htmlFor="radio2">Enigma Eskil</label>
					<input
						type="radio"
						name="radio"
						value={"Enigma Eskil"}
						id="radio2"
						onChange={handleChoice}
					></input>
				</div>
				<div>
					<label htmlFor="radio3">Kraken Khadija</label>
					<input
						type="radio"
						name="radio"
						value={"Kraken Khadija"}
						id="radio3"
						onChange={handleChoice}
					></input>
				</div>
				<div>
					<label htmlFor="radio4">Turbo Tyler</label>
					<input
						type="radio"
						name="radio"
						value={"Turbo Tyler"}
						id="radio4"
						onChange={handleChoice}
					></input>
				</div>
			</div>
			<button>SUBMIT</button>
		</form>
	);
}
export default FormA;
