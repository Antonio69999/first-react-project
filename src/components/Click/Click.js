import { useState } from "react";
import './Click.css';

function Click() {
  const [count, setCount] = useState(0);
  function addOne() {
    setCount(count + 1);
  }

  function substractOne() {
    setCount(count - 1);
  }
  return (
    <>
      <p className="click">Vous avez cliqué {count} fois !</p>
      <button className="click" onClick={addOne}>Ajouter 1</button>
      <button className="click" onClick={substractOne}>Substract One</button>
    </>
  );
}

export default Click;
