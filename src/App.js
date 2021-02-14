import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/homePage/Feedback"
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Feed/>
    </div>
  );
}

export default App;
