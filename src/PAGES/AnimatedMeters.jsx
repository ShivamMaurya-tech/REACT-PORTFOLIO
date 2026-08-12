import { useEffect, useState } from "react";

export const AnimatedMeter = ({ label, targetPercentage, animate }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    // If the modal isn't fully open yet, keep it at 0
    if (!animate) {
      setCurrentCount(0);
      return;
    }

    let start = 0;
    // We update the number every 16ms (roughly 60 frames per second)
    // The total animation takes 1000ms (1 second) to exactly match your CSS width animation
    const increment = targetPercentage / (1000 / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetPercentage) {
        setCurrentCount(targetPercentage); // Snap to the exact final number
        clearInterval(timer);
      } else {
        setCurrentCount(Math.floor(start)); // Count up cleanly
      }
    }, 16);

    // Cleanup the timer to prevent memory leaks
    return () => clearInterval(timer);
  }, [animate, targetPercentage]);

  return (
    <div className="meter-wrapper">
      <div className="meter-header">
        <span className="meter-label">{label}</span>
        {/* Render the live, spinning count! */}
        <span className="meter-percentage">{currentCount}%</span>
      </div>
      <div className="meter-bar-bg">
        <div
          className="meter-bar-fill"
          style={{ width: animate ? `${targetPercentage}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};
