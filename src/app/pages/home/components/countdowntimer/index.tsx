import React, { useEffect, useState } from "react";

interface IDay {
  days: number;
}

const CountdownTimer = ({ days }: IDay) => {
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + days);

  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const difference = targetTime.getTime() - currentTime.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{" "}
      {timeLeft.seconds}
    </>
  );
};

export default CountdownTimer;
