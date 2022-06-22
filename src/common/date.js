import {useContext, useEffect, useRef, useState } from 'react';
import {  LanguageContext } from '../containers/Language';

export const useDate = (locale) => {
  const { dictionary } = useContext(LanguageContext);
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  const [num, setNum] = useState(1);

  let intervalRef = useRef();
  const increaseTime = () => setNum((prev) => prev + 1);
  
  useEffect(() => {
    intervalRef.current = setInterval(increaseTime, 1000);
    const timer = setInterval(() => {
      //Creates an interval which will update the current data every minute
      //This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(intervalRef.current);

      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  const hour = today.getHours();
  const wish = `${(hour < 12 &&  dictionary.goodMorning) || (hour < 17 &&  dictionary.goodAfternoon) || dictionary.goodEvening} `;

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
    time
  };
};


