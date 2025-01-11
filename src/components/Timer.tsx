import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

interface TimerProps {
  isRunning: boolean;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ isRunning, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [play] = useSound('/timer-end.mp3', { volume: 1.0 });

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(30);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          play();
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, onComplete, play]);

  return (
    <div className="text-4xl font-bold mb-4">
      {timeLeft}s
    </div>
  );
};

export default Timer;