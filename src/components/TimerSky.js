import React, { useState, useEffect } from 'react';

const TimerSky = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
      <Sky
        distance = {200}
        inclination={seconds/10000} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
        turbidity = {10}
        rayleigh = {2.376}
        mieCoefficient = {0.005}
        mieDirectionalIG = {0.7}
        exposure = {0.1}

      />
  );
};

export default TimerSky;
