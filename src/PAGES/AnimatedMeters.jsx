import { useEffect, useState, useRef } from "react";

export const AnimatedMeter = ({ label, targetPercentage }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Tracks if the meter is on screen
  const meterRef = useRef(null); // Connects to the meter div

  // 1. Observe when the meter scrolls into the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the meter comes into the screen
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation!

          // Stop observing so it only animates the first time you see it
          if (meterRef.current) {
            observer.unobserve(meterRef.current);
          }
        }
      },
      { threshold: 0.2 }, // Triggers when 20% of the meter is visible on screen
    );

    if (meterRef.current) {
      observer.observe(meterRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (meterRef.current) observer.unobserve(meterRef.current);
    };
  }, []);

  // 2. Handle the counting animation
  useEffect(() => {
    // If it's not visible on screen yet, keep it at 0
    if (!isVisible) {
      setCurrentCount(0);
      return;
    }

    let start = 0;
    // We update the number every 16ms (roughly 60 frames per second)
    // The total animation takes 1000ms (1 second)
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
  }, [isVisible, targetPercentage]);

  return (
    <>
      {/* Attach the ref here so the Observer knows what to watch! */}
      <div className="meter-wrapper" ref={meterRef}>
        <div className="meter-header">
          <span className="meter-label">{label}</span>
          {/* Render the live, spinning count! */}
          <span className="meter-percentage">{currentCount}%</span>
        </div>
        <div className="meter-bar-bg">
          <div
            className="meter-bar-fill"
            style={{
              width: isVisible ? `${targetPercentage}%` : "0%",
              transition: "width 1s ease-in-out", // Ensures the bar moves smoothly when width updates
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
