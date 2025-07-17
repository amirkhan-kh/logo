"use client"
import React, { useState, useEffect } from "react";

export const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en-GB", { hour12: false }); 
      setTime(currentTime);
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return
  (
    <>
    </>
    <p className="w-[50px]">{time}</p>;

  )
};


