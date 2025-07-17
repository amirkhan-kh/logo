import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en-GB", { hour12: false }); // "en-GB" formatda va 24 soatlik formatda
      setTime(currentTime);
    }, 1000); 

    return () => clearInterval(intervalId); // Komponent unmount bo'lsa, intervalni to'xtatadi
  }, []);

  return <div>{time}</div>;
};

export default CurrentTime;
