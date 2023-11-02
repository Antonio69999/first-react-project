import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(0);

  //   function timer() {
  //     setTime(time + 1);
  //   }

  //   setTimeout(timer, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    if(time === 10) {
        clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  });

  return <p>{time} se sont écoulées</p>;
}

export default Time;
