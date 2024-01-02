import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update time every second (1000 milliseconds)

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className='mt-2 text-5xl flex items-center justify-center'>
      
      <p className="tracking-widest">{time}</p>
    </div>
  );
};

export default Clock;
