import Click from "../Click/Click";
import "./Welcome.css"

function Welcome(props) {
  return (
    <section className="welcome">
      <h1>
        Welcome {props.firstname} {props.lastname}!
      </h1>
      <Click></Click>
    </section>
  );
}

export default Welcome;
