import { useState, useEffect } from "react";

function ButtonA() {
  const [userChoice, setUserChoice] = useState(null);
  const [entryTime, setEntryTime] = useState(null);

  const FLASHTIME = 100;

  const [isFlashing, setIsFlashing] = useState(false);

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
          ? "bg-red-500 text-blue-500 hover:bg-pink-400 hover:text-white"
          : "bg-blue-500 text-red-500 hover:bg-white hover:text-pink-400"
      }`}
    >
      КУПИТЬ СЕЙЧАС!
    </button>
  );
}
export default ButtonA;
