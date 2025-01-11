import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

interface TimerProps {
  isRunning: boolean;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ isRunning, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [play] = useSound('/timer-end.mp3');

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(30);
      return;
    }

    if (timeLeft === 0) {
      play();
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, onComplete, play]);

  return (
    <div className="text-4xl font-bold mb-4">
      {timeLeft}s
    </div>
  );
};

export default Timer;