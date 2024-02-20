import { useState, useEffect } from "react";
import "./App.css";
import FormA from "./components/FormA";
import FormB from "./components/FormB";

function App() {
	const [displayedForm, setDisplayedForm] = useState("A");
	useEffect(() => {
		Math.random() < 0.5 ? setDisplayedForm("A") : setDisplayedForm("B");
	}, []);

	return (
		<>
			<h1>A/B TESTING</h1>
			<p>
				This page serves as a demonstration of A/B testing, a method used to compare two
				versions of a webpage to determine which one performs better. The page comprises two
				sections: a static section that remains unchanged between versions A and B, and a
				<span> dynamic </span> section that varies based on a fifty-fifty chance of loading for
				each user. Both versions feature a call-to-action (CTA) button, which prompts user
				interaction. Additionally, GDPR information is provided via the console for
				transparency purposes.
			</p>
			{displayedForm === "A" ? <FormA /> : <FormB />}
		</>
	);
}

export default App;
