import { useState, useEffect } from "react";
import "./App.css";
import ButtonA from "./components/ButtonA";
import ButtonB from "./components/ButtonB";

function App() {
  const [displayedForm, setDisplayedForm] = useState("A");
  useEffect(() => {
    Math.random() < 0.5 ? setDisplayedForm("A") : setDisplayedForm("B");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold mt-10">ЛУЧШИЙ ПЫЛЕСОС!</h1>
      <p></p>
      <img
        className="mt-10 rounded-[3rem] w-1/3 h-auto"
        src="./src/images/vacuum.jpg"
      />
      {displayedForm === "A" ? <ButtonA /> : <ButtonB />}
    </div>
  );
}

export default App;
