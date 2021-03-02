import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/homePage/Feedback"
import HomePage from "./components/homePage/HomePage";
import ScrollArrow from "./Scroll.jsx"
function App() {
  return (
    <div className="App">
      <HomePage />
      <Feed/>
      <ScrollArrow/>
    </div>
  );
}

export default App;
