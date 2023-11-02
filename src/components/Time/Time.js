import { useEffect, useState } from "react";
import "./Time.css";
import zawarudo from '../../zaWarudo.gif';

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

    if (time === 5) {
      clearInterval(interval);
      document.body.classList.add("background");
      document.querySelectorAll("p").forEach((e) => (e.style.color = "white"));
      let h1 = document.querySelector("h1");
      h1.style.color = "white";

      let h2 = document.createElement("h2");
      h2.textContent = "ZA WARUDO !!!";
      document.querySelectorAll("h2").forEach((e) => (e.style.color = "white"));
      document.querySelector(".time").appendChild(h2);
      h2.classList.add("bigSizer");

      let img = document.createElement("img");
      img.setAttribute("src", zawarudo);
      img.setAttribute("alt", "za warudo");

      document.querySelector(".time").appendChild(img);
    }

    return () => clearInterval(interval);
  });

  return (
    <section className="time">
      <p>{time} secondes se sont écoulées</p>
    </section>
  );
}

export default Time;
