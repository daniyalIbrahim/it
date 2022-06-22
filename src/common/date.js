import { useEffect, useRef, useState } from 'react';

export const useDate = (locale) => {
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  const [num,setNum] =useState(1);
  const [pause,setPause] =useState(false);
  let intervalRef = useRef();
  const increaseTime=()=>setNum((prev)=>prev+1)

  useEffect(() => {
    setPause(false);
    intervalRef.current = setInterval(increaseTime, 1000);

    const timer = setInterval(() => {
       //Creates an interval which will update the current data every minute
       //This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    },60 * 1000);
    return () => {
      clearInterval(intervalRef.current);
      
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} `;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    second: 'numeric',
  });

  return {
    date,
    num,
    wish,
    time,
  };
};
