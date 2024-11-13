import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Custom React App!</h1>
        <p>This is a custom design using React.</p>
        <button onClick={() => alert("Button Clicked!")}>Click Me</button>
      </header>
    </div>
  );
}
export default App;
