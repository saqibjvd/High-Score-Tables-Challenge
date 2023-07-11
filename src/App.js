
import "./App.css";
import Footer from "./components/Footer";
import HighScoreTable from "./components/HighScoreTable";
// import ScoreButton from "./components/ScoreButton";


function App() {
  return (
    <div className="App">
      <div>
        <h1>High Scores Per Country</h1>
       
        {/* <ScoreButton /> */}
        <HighScoreTable />
        <Footer />
      </div>
    </div>
  );
}

export default App;
