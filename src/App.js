import "./App.css";
import HighScoreTable from "./components/HighScoreTable";

function App() {
  return (
    <div className="App">
      <div>
        <h1>High Scores Per Country</h1>
        <HighScoreTable />
      </div>
    </div>
  );
}

export default App;
