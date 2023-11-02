import Time from "./components/Time/Time";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";

function App() {
  return (
    <>
      <Welcome className="welcome" firstname="Arouf" lastname="Gangsta" />
      <Time className="welcome"></Time>
    </>
  );
}

export default App;
