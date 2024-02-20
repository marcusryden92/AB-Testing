import { useState, useEffect } from "react";

function FormB() {
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
			formType: "FormB",
			submitTime,
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Choose your super power!</h2>
			<div className="flex">
				<div>
					<label htmlFor="radio1">timetravel</label>
					<input
						type="radio"
						name="radio"
						value={"timetravel"}
						id="radio1"
						onChange={handleChoice}
					></input>
				</div>
				<div>
					<label htmlFor="radio2">invissbility</label>
					<input
						type="radio"
						name="radio"
						value={"invissbility"}
						id="radio2"
						onChange={handleChoice}
					></input>
				</div>
				<div>
					<label htmlFor="radio3">super strength</label>
					<input
						type="radio"
						name="radio"
						value={"super strength"}
						id="radio3"
						onChange={handleChoice}
					></input>
				</div>
				<div>
					<label htmlFor="radio4">teleportation</label>
					<input
						type="radio"
						name="radio"
						value={"teleportation"}
						id="radio4"
						onChange={handleChoice}
					></input>
				</div>
			</div>
			<button>SUBMIT</button>
		</form>
	);
}
export default FormB;
