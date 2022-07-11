import Grid from "./Visualizer/Grid/Grid";

function App() {
  return (
    <div className="App">
      <Grid
        rows={window.innerWidth > 400 ? 15 : 20}
        cols={window.innerWidth > 400 ? 40 : 10}
      />
    </div>
  );
}

export default App;
