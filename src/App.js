import logo from './logo.svg';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Counters />
    </div>
  );
}

export default App;
