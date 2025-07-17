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

  return <div>{time}</div>;
};


const CurrentDateAndTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const options = {
        weekday: "short", // Kun nomi (ya'ni "Пн")
        year: "numeric", // Yil
        month: "long", // Oyning to'liq nomi
        day: "numeric", // Kun raqami
        hour: "2-digit", // Soat
        minute: "2-digit", // Daqiqalar
        second: "2-digit", // Sekundalar
        hour12: false, // 24 soatlik format
      };

      const currentTime = new Date().toLocaleString("ru-RU", options);
      setDateTime(currentTime); // formatlangan vaqtni state ga o'zgartirish
    }, 1000);

    return () => clearInterval(intervalId); // Komponent unmount bo'lganda intervalni to'xtatish
  }, []);

  return <div>{dateTime}</div>; // Dinamik vaqtni chiqarish
};



