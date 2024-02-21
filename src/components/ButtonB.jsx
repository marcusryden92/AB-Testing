import { useState, useEffect } from "react";

function ButtonB() {
  const [userChoice, setUserChoice] = useState(null);
  const [entryTime, setEntryTime] = useState(null);

  const [isFlashing, setIsFlashing] = useState(false);

  const FLASHTIME = 100;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlashing((prevState) => !prevState);
    }, FLASHTIME);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setEntryTime(new Date());
  }, []);

  function handleClick(e) {
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
    <button
      className={`button  ${
        isFlashing
          ? "bg-yellow-500 text-black hover:bg-pink-400 hover:text-white"
          : "bg-black text-yellow-500 hover:bg-white hover:text-pink-400"
      }`}
      onClick={handleClick}
    >
      КУПИТЬ СЕЙЧАС!
    </button>
  );
}
export default ButtonB;
